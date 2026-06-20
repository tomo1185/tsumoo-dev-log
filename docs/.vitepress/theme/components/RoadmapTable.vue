<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue";

const tasks = [
  ["TSUMOO-1", "共通", "構想整理", "Tsumoo構想整理", "完了", "4h", "5/22", "5/22"],
  ["TSUMOO-2", "フェーズ1", "要件定義", "フェーズ1要件定義", "完了", "6h", "5/22", "5/22"],
  ["TSUMOO-3", "フェーズ1", "基本設計", "フェーズ1基本設計", "完了", "6h", "5/23", "5/25"],
  ["TSUMOO-4", "フェーズ1", "基本設計", "UI方針整理", "完了", "5h", "5/25", "5/26"],
  ["TSUMOO-5", "フェーズ1", "詳細設計", "画面詳細設計", "完了", "6h", "5/26", "5/28"],
  ["TSUMOO-6", "フェーズ1", "詳細設計", "DB設計", "完了", "6h", "5/26", "5/30"],
  ["TSUMOO-7", "フェーズ1", "詳細設計", "API設計", "完了", "6h", "5/27", "5/31"],
  ["TSUMOO-8", "共通", "環境整備", "アプリケーション初期構築", "完了", "5h", "5/29", "6/2"],
  ["TSUMOO-9", "共通", "環境整備", "開発環境・基本設定整備", "完了", "4h", "5/30", "6/2"],
  ["TSUMOO-10", "フェーズ1", "開発", "公開トップページ実装", "完了", "4h", "5/29", "5/30"],
  ["TSUMOO-30", "フェーズ1", "画面実装", "認証画面コーディング", "完了", "5h", "5/30", "5/30"],
  ["TSUMOO-31", "フェーズ1", "画面実装", "新規登録画面コーディング", "完了", "4h", "5/31", "6/1"],
  ["TSUMOO-32", "フェーズ1", "画面実装", "パスワードリセット画面コーディング", "完了", "4h", "5/31", "6/2"],
  ["TSUMOO-33", "フェーズ1", "画面実装", "ダッシュボード画面コーディング", "完了", "5h", "5/31", "6/3"],
  ["TSUMOO-34", "フェーズ1", "画面実装", "タスク一覧画面コーディング", "完了", "5h", "5/31", "6/4"],
  ["TSUMOO-35", "フェーズ1", "画面実装", "タスク一括登録画面コーディング", "完了", "4h", "6/4", "6/5"],
  ["TSUMOO-36", "フェーズ1", "画面実装", "タスク編集画面コーディング", "完了", "4h", "6/5", "6/6"],
  ["TSUMOO-37", "フェーズ1", "画面実装", "振り返り画面コーディング", "完了", "5h", "6/6", "6/7"],
  ["TSUMOO-38", "フェーズ1", "画面実装", "設定画面コーディング", "完了", "4h", "6/7", "6/8"],
  ["TSUMOO-12", "フェーズ1", "開発", "登録処理実装", "完了", "5h", "6/7", "6/8"],
  ["TSUMOO-29", "フェーズ1", "開発", "フロントエンド共通化・リファクタリング", "完了", "6h", "6/10", "6/10"],
  ["TSUMOO-39", "フェーズ1", "開発", "フロントエンド共通化・リファクタリング", "完了", "4h", "6/10", "6/10"],
  ["TSUMOO-40", "フェーズ1", "開発", "タスク管理への命名整理", "完了", "2h", "6/10", "6/10"],
  ["TSUMOO-14", "フェーズ1", "開発", "Google認証処理実装", "完了", "6h", "6/11", "6/13"],
  ["TSUMOO-11", "フェーズ1", "開発", "メール確認メール再送処理を実装", "完了", "5h", "6/14", "6/16"],
  ["TSUMOO-43", "フェーズ1", "開発", "ログイン済み / 未確認ユーザーの扱い実装", "完了", "6h", "6/15", "6/16"],
  ["TSUMOO-13", "フェーズ1", "開発", "ログイン・ログアウト処理実装", "完了", "6h", "6/16", "6/18"],
  ["TSUMOO-15", "フェーズ1", "開発", "パスワードリセット処理実装", "完了", "6h", "6/18", "6/19"],
  ["TSUMOO-16", "フェーズ1", "開発", "アプリ共通レイアウト実装", "完了", "5h", "6/19", "6/19"],
  ["TSUMOO-17", "フェーズ1", "開発", "タスク一覧表示実装", "未着手", "6h", "6/22", "6/23"],
  ["TSUMOO-18", "フェーズ1", "開発", "タスク作成処理実装", "未着手", "6h", "6/23", "6/24"],
  ["TSUMOO-19", "フェーズ1", "開発", "タスク編集・削除処理実装", "未着手", "6h", "6/24", "6/25"],
  ["TSUMOO-20", "フェーズ1", "開発", "タスク完了・完了取消処理実装", "未着手", "5h", "6/25", "6/26"],
  ["TSUMOO-21", "フェーズ1", "開発", "タスク一覧フィルター実装", "未着手", "6h", "6/26", "6/27"],
  ["TSUMOO-22", "フェーズ1", "開発", "PC向け一括登録実装", "未着手", "6h", "6/27", "6/28"],
  ["TSUMOO-23", "フェーズ1", "開発", "達成状況・振り返り画面実装", "未着手", "6h", "6/29", "6/30"],
  ["TSUMOO-24", "フェーズ1", "開発", "アカウント設定実装", "完了", "6h", "6/19", "6/19"],
  ["TSUMOO-41", "フェーズ1", "開発", "Google連携解除実装", "未着手", "6h", "7/2", "7/4"],
  ["TSUMOO-42", "フェーズ1", "開発", "退会処理実装", "未着手", "4h", "7/3", "7/4"],
  ["TSUMOO-25", "フェーズ1", "テスト", "テスト方針整理", "未着手", "3h", "", ""],
  ["TSUMOO-26", "フェーズ1", "テスト", "テスト", "未着手", "12h", "", ""],
  ["TSUMOO-27", "フェーズ1", "環境整備", "VPSデプロイ手順整備", "未着手", "4h", "", ""],
  ["TSUMOO-28", "フェーズ1", "ドキュメント整備", "README・開発手順整備", "未着手", "3h", "", ""]
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
