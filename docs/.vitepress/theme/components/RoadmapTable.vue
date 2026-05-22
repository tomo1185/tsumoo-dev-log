<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue";

const tasks = [
  ["TSUMOO-1", "共通", "構想整理", "Tsumoo構想整理", "未着手", "3h", "5/22", "5/22"],
  ["TSUMOO-2", "フェーズ1", "要件定義", "フェーズ1要件定義", "未着手", "5h", "5/22", "5/23"],
  ["TSUMOO-3", "フェーズ1", "基本設計", "フェーズ1基本設計", "未着手", "6h", "5/23", "5/25"],
  ["TSUMOO-4", "フェーズ1", "基本設計", "UI方針整理", "未着手", "5h", "5/25", "5/26"],
  ["TSUMOO-5", "フェーズ1", "基本設計", "認証方針整理", "未着手", "3h", "5/26", "5/26"],
  ["TSUMOO-6", "フェーズ1", "詳細設計", "DB設計", "未着手", "5h", "5/27", "5/28"],
  ["TSUMOO-7", "フェーズ1", "詳細設計", "API設計", "未着手", "5h", "5/28", "5/29"],
  ["TSUMOO-8", "共通", "環境構築", "ローカル開発環境構築", "未着手", "5h", "5/29", "5/30"],
  ["TSUMOO-9", "フェーズ1", "開発", "アプリケーション初期構築", "未着手", "5h", "5/30", "5/31"],
  ["TSUMOO-10", "フェーズ1", "開発", "認証実装", "未着手", "6h", "6/1", "6/2"],
  ["TSUMOO-11", "フェーズ1", "開発", "ToDo作成・一覧実装", "未着手", "8h", "6/2", "6/4"],
  ["TSUMOO-12", "フェーズ1", "開発", "完了体験実装", "未着手", "6h", "6/4", "6/5"],
  ["TSUMOO-13", "フェーズ1", "開発", "振り返り実装", "未着手", "8h", "6/5", "6/7"],
  ["TSUMOO-14", "フェーズ1", "開発", "設定・退会実装", "未着手", "5h", "6/7", "6/8"],
  ["TSUMOO-15", "共通", "テスト", "テスト方針整理", "未着手", "3h", "6/8", "6/8"],
  ["TSUMOO-16", "共通", "環境構築", "GitHub Actions導入", "未着手", "4h", "6/9", "6/9"],
  ["TSUMOO-17", "共通", "ドキュメント整備", "README/開発手順整備", "未着手", "3h", "6/10", "6/10"],
  ["TSUMOO-18", "フェーズ1", "確認", "フェーズ1動作確認・調整", "未着手", "6h", "6/10", "6/12"]
];

const scrollRef = ref<HTMLDivElement | null>(null);
const showHint = ref(false);
const hintDismissible = ref(false);
let isDown = false;
let startX = 0;
let scrollLeft = 0;
let observer: IntersectionObserver | null = null;
let dismissibleTimer: ReturnType<typeof window.setTimeout> | null = null;

function onPointerDown(event: PointerEvent) {
  if (event.pointerType === "touch" || !scrollRef.value) return;
  hideHint();
  isDown = true;
  startX = event.clientX;
  scrollLeft = scrollRef.value.scrollLeft;
  scrollRef.value.setPointerCapture(event.pointerId);
}

function hideHint() {
  if (!hintDismissible.value) return;
  showHint.value = false;
}

function onPointerMove(event: PointerEvent) {
  if (!isDown || !scrollRef.value) return;
  event.preventDefault();
  scrollRef.value.scrollLeft = scrollLeft - (event.clientX - startX);
}

function stopDrag(event: PointerEvent) {
  if (!scrollRef.value) return;
  isDown = false;
  if (scrollRef.value.hasPointerCapture(event.pointerId)) {
    scrollRef.value.releasePointerCapture(event.pointerId);
  }
}

onMounted(() => {
  if (!scrollRef.value) return;

  observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting || !scrollRef.value) return;
      if (scrollRef.value.scrollWidth <= scrollRef.value.clientWidth) return;

      showHint.value = true;
      hintDismissible.value = false;
      dismissibleTimer = window.setTimeout(() => {
        hintDismissible.value = true;
      }, 3200);
      observer?.disconnect();
    },
    { threshold: 0.35 }
  );

  observer.observe(scrollRef.value);
});

onBeforeUnmount(() => {
  observer?.disconnect();
  if (dismissibleTimer) {
    window.clearTimeout(dismissibleTimer);
  }
});
</script>

<template>
  <div
    ref="scrollRef"
    class="roadmap-table-scroll"
    @pointerdown="onPointerDown"
    @pointermove="onPointerMove"
    @pointerup="stopDrag"
    @pointercancel="stopDrag"
    @pointerleave="stopDrag"
    @scroll="hideHint"
    @wheel="hideHint"
    @touchstart="hideHint"
  >
    <Transition name="roadmap-hint">
      <button
        v-if="showHint"
        class="roadmap-scroll-hint"
        type="button"
        aria-label="スクロールヒントを閉じる"
        @pointerdown.stop
        @pointermove.stop
        @pointerup.stop
        @click.stop="showHint = false"
      >
        <span class="roadmap-scroll-hand" aria-hidden="true">
          <span class="roadmap-scroll-hand-motion">
          <svg viewBox="0 0 64 64" role="img">
            <path
              d="M30 11a5 5 0 0 1 5 5v17l2-2a5 5 0 0 1 7 7L34 51a10 10 0 0 1-8 4h-3a10 10 0 0 1-9-6L8 34a5 5 0 0 1 9-4l3 7V16a5 5 0 0 1 10-5Z"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="4"
            />
          </svg>
          </span>
        </span>
        <span class="roadmap-scroll-hint-text">スクロールできます</span>
      </button>
    </Transition>
    <table class="roadmap-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>フェーズ</th>
          <th>工程</th>
          <th>タスク</th>
          <th>状態</th>
          <th>予定</th>
          <th>開始予定日</th>
          <th>期限</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in tasks" :key="task[0]">
          <td v-for="(value, index) in task" :key="`${task[0]}-${index}`">
            {{ value }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
