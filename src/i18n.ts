export type Locale = 'ja' | 'en' | 'zh'

export interface PortfolioCopy {
  pageTitle: string
  description: string
  skipLink: string
  homeLabel: string
  navigationLabel: string
  projectsNav: string
  experienceNav: string
  contactNav: string
  profileNav: string
  focusNav: string
  githubProfileText: string
  languageLabel: string
  githubLabel: string
  themeToLight: string
  themeToDark: string
  light: string
  dark: string
  heroTitleFirst: string
  heroTitleSecond: string
  heroEducationSchool: string
  heroEducationPeriod: string
  heroEducationDegree: string
  heroSummaryTitle: string
  heroSummaryParagraphs: string[]
  experienceTitle: string
  experienceRangeLabel: string
  experienceProjectsLabel: string
  experienceProjectDetailsTooltip: string
  experienceProjectNoDetailsTooltip: string
  experienceProjectDetails: Record<string, string>
  workHistory: Array<{
    company: string
    period: string
    summary: string
    projects: string[]
    note?: string
  }>
  profileIndex: string
  profileTitleFirst: string
  profileTitleSecond: string
  profileDescription: string
  profileHighlights: Array<{
    title: string
    description: string
    dynamicExperience?: boolean
  }>
  focusTitle: string
  focusAreas: Array<{
    title: string
    technologies: string[]
  }>
  projectsTitle: string
  projectsIntro: string
  projectRoleLabel: string
  projectNamesLabel: string
  projects: Array<{
    category: string
    title: string
    description: string
    role: string
    names: string[]
  }>
  projectCases?: Array<{
    category: string
    title: string
    description: string
    technologies: string[]
    challenges: string[]
    solutions: string[]
    responsibilities: string[]
    results: string[]
  }>
  projectDetailsLabel: string
  projectCloseLabel: string
  projectPauseAutoplayLabel: string
  projectResumeAutoplayLabel: string
  projectPreviousLabel: string
  projectNextLabel: string
  projectCounterLabel: string
  projectTechnologiesLabel: string
  projectResponsibilitiesLabel: string
  projectResultsLabel: string
  contactTitle: string
  contactDescription: string
  contactEmailLabel: string
  footerQuote: string
  footerBackToTop: string
}

export const locales: Array<{ value: Locale; label: string; shortLabel: string }> = [
  { value: 'ja', label: '日本語', shortLabel: '日' },
  { value: 'en', label: 'English', shortLabel: 'EN' },
  { value: 'zh', label: '简体中文', shortLabel: '中' },
]

export const messages: Record<Locale, PortfolioCopy> = {
  ja: {
    pageTitle: 'Frontend Engineer Portfolio | フロントエンドエンジニア',
    description:
      '業務システム開発に携わるフロントエンドエンジニアのポートフォリオ。HTML5、CSS3、JavaScript、TypeScript、React、Vueなどの技術と実務経験を紹介します。',
    skipLink: '本文へスキップ',
    homeLabel: 'ホーム',
    navigationLabel: 'メインナビゲーション',
    projectsNav: '開発実績',
    experienceNav: '職務経歴',
    contactNav: '連絡先',
    profileNav: 'プロフィール',
    focusNav: 'スキル',
    githubProfileText: 'GitHubプロフィールを見る',
    languageLabel: '表示言語',
    githubLabel: 'GitHubプロフィールを新しいタブで開く',
    themeToLight: 'ライトテーマに切り替える',
    themeToDark: 'ダークテーマに切り替える',
    light: 'LIGHT',
    dark: 'DARK',
    heroTitleFirst: '韋宗佐',
    heroTitleSecond: 'フロントエンドエンジニア',
    heroEducationSchool: '北方民族大学',
    heroEducationPeriod: '2013年8月 ～ 2017年6月',
    heroEducationDegree: '学士課程 卒業',
    heroSummaryTitle: 'キャリア概要',
    heroSummaryParagraphs: [
      '約{experience}のフロントエンド開発実務経験があります。Vue 2/3、React、TypeScriptを中心に、企業内業務システム、パートナーポータル、金融管理システム、鉄道の監視・診断システム（大画面可視化を含む）など、多様なWebアプリケーションの開発に携わってきました。また、EChartsとWebSocketを活用したリアルタイムデータ可視化を得意としています。',
      '複数のプロジェクトで開発リーダーを務めたほか、フロントエンド開発を一人で担当し、フロントエンドモジュール全体を実装した経験もあります。コンポーネント化・モジュール化を通じて、開発効率とコード品質の向上に取り組んでいます。',
      '製品要件書をもとに業務背景や製品ロジックを理解し、機能要件と業務フローを整理したうえで、具体的なフロントエンド実装方針に落とし込むことができます。',
    ],
    experienceTitle: '職務経歴',
    experienceRangeLabel: 'CAREER',
    experienceProjectsLabel: '主な担当',
    experienceProjectDetailsTooltip: 'クリックして詳細を見る',
    experienceProjectNoDetailsTooltip: '関連するプロジェクト詳細はありません',
    experienceProjectDetails: {
      商業販売プラットフォーム: '商業販売プラットフォーム（モバイル版）',
      パートナーワークベンチ: 'パートナーワークベンチ',
      意向書: '意向書',
      ビッグデータ診断システム: 'ビッグデータ診断システム',
      車載メンテナンス端末: '車載メンテナンス端末',
      '5Gクラウド信号運用・保守診断システム': '5Gクラウド信号運用・保守診断システム',
      福州地下鉄スマート運用保守統合プラットフォーム: '福州地下鉄スマート運用保守統合プラットフォーム',
      大金所: '大金所（松果財富）',
      雪松大学: '雪松大学',
      資産管理システム: '資産管理システム',
    },
    workHistory: [
      {
        company: '科之鋭人材コンサルティング有限公司（ファーウェイOD）',
        period: '2023.07–2026.06',
        summary: '社内担当者向け・社外パートナー向けのワンストップ業務システムで、フロントエンド開発を主導。',
        projects: ['商業販売プラットフォーム', '契約注文', '意向書', '名刺', 'パートナー公式サイト', 'パートナーワークベンチ'],
      },
      {
        company: 'シーメンス・モビリティ・テクノロジーズ株式会社',
        period: '2021.01–2022.11',
        summary: '鉄道関連システムのフロントエンド開発を主導。',
        projects: [
          'ビッグデータ診断システム',
          '車載メンテナンス端末',
          '5Gクラウド信号運用・保守診断システム',
          '福州地下鉄スマート運用保守統合プラットフォーム',
          'リアルタイム監視システム',
        ],
      },
      {
        company: '広東・香港・マカオ大湾区ハードテクノロジー・イノベーション研究院',
        period: '2020.11–2021.01',
        summary: '以下のシステムのフロントエンド開発を主導。',
        projects: ['衛星測定・運用管制システム', '集中運用管理プラットフォーム'],
      },
      {
        company: '雪松控股',
        period: '2018.04–2020.10',
        summary: 'グループ向けサービス・業務システムのフロントエンド開発を主導。',
        projects: ['大金所', '雪松大学', '資産管理システム'],
      },
      {
        company: '広州楽特信息科技有限公司',
        period: '2017.02–2018.04',
        summary: 'アプリと公式サイトのフロントエンド開発を担当。',
        projects: ['Lete転送アプリ', 'Lete公式サイト'],
      },
    ],
    profileIndex: 'PROFILE',
    profileTitleFirst: 'プロフィール',
    profileTitleSecond: '',
    profileDescription:
      'Vue、React、JavaScript、TypeScriptを用いたフロントエンド開発に携わってきました。企業向け業務システムを中心に、フロントエンド実装、コンポーネント開発、パフォーマンス改善に取り組んでいます。',
    profileHighlights: [
      { title: '実務経験', description: '', dynamicExperience: true },
      { title: 'フレームワーク', description: 'Vue 2 / Vue 3 ・ React' },
      { title: '主な開発対象', description: '企業向け業務システム' },
      { title: '注力領域', description: 'コンポーネント設計・性能改善' },
    ],
    focusTitle: 'スキル',
    focusAreas: [
      {
        title: 'Web基礎',
        technologies: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript'],
      },
      {
        title: 'フレームワーク',
        technologies: ['React', 'Vue 3', 'Vue 2', 'Uni-App', 'jQuery'],
      },
      {
        title: 'ツール・通信',
        technologies: ['Git', 'Vite', 'Webpack', 'Axios', 'WebSocket'],
      },
      {
        title: 'UI・可視化',
        technologies: ['Element', 'Vant', 'Mint UI', 'ECharts', 'Canvas'],
      },
    ],
    projectsTitle: '開発実績',
    projectsIntro: '実務で携わった業務システム・鉄道システムをご紹介します。',
    projectRoleLabel: '担当',
    projectNamesLabel: '関連プロジェクト',
    projectDetailsLabel: 'プロジェクト詳細を見る',
    projectCloseLabel: '閉じる',
    projectPauseAutoplayLabel: '自動スクロールを一時停止',
    projectResumeAutoplayLabel: '自動スクロールを再開',
    projectPreviousLabel: '前のプロジェクト',
    projectNextLabel: '次のプロジェクト',
    projectCounterLabel: 'プロジェクト',
    projectTechnologiesLabel: '使用技術',
    projectResponsibilitiesLabel: '担当業務',
    projectResultsLabel: '主な成果',
    projects: [
      {
        category: 'BUSINESS SYSTEMS',
        title: '企業業務管理システム',
        description: '社内担当者と社外パートナーが利用する業務システムのフロントエンド開発。',
        role: 'フロントエンド開発を主導。',
        names: ['商業販売プラットフォーム', 'パートナー公式サイト', 'パートナーワークベンチ', '名刺'],
      },
      {
        category: 'RAILWAY / IoT',
        title: '鉄道関連 IoT システム',
        description: '鉄道分野の診断・保守・運行監視システムのフロントエンド開発。',
        role: '複数システムのフロントエンド開発を主導。',
        names: ['ビッグデータ診断システム', '車載メンテナンス端末', '5Gクラウド信号運用・保守診断システム', '福州地下鉄スマート運用保守統合プラットフォーム', 'リアルタイム監視システム'],
      },
      {
        category: 'ORDER / OPERATIONS',
        title: '注文・業務支援システム',
        description: '注文・意向管理など、社内外の業務を支えるシステムの開発。',
        role: '担当領域のフロントエンド開発を主導。',
        names: ['契約注文', '意向書', '大金所', '資産管理システム'],
      },
    ],
    projectCases: [
      {
        category: '企業向け業務システム',
        title: '商業販売プラットフォーム（モバイル版）',
        description: '部門内の営業担当者向けに、紅版WeLinkを基盤として構築されたワンストップのモバイル営業管理プラットフォームです。WeLink JS-SDKを通じてプラットフォームの各種機能と連携し、営業案件の登録、商談管理、提案書の作成、商務管理、受注管理、契約管理、パートナー開拓など、営業プロセスの幅広い業務を統合。社内担当者に、モバイルでの業務遂行とオフィス業務に共通して利用できる窓口を提供します。',
        technologies: ['Vue 3', 'Vuex', 'Vue Router', 'Vite', 'Git', 'Vant'],
        challenges: [],
        solutions: [],
        responsibilities: [
          'プロジェクト全体のフロントエンド技術方針の策定やアーキテクチャ検討に参画し、担当する業務モジュールの詳細設計と開発を担当。',
          'Vueなどのフロントエンド技術とWeLink JS-SDKを活用し、モバイル向け業務機能と企業向けオフィスプラットフォームの機能を連携。',
          '各業務モジュールの特性に応じてコンポーネント化・モジュール化を進め、共通業務コンポーネントを抽象化することで、重複開発を抑え、コードの再利用性を向上。',
          'モバイルページの読み込み性能を改善するため、ブラウザーキャッシュ、遅延読み込み、非同期読み込みなどを用いてリソース読み込みを最適化。',
          '担当モジュールのコード構成設計、機能開発、保守を行い、業務機能の拡張性と保守性を確保。',
        ],
        results: [
          '担当業務モジュールのフロントエンド設計・開発を完了し、業務機能とWeLinkプラットフォームの機能を連携。',
          'ブラウザーキャッシュと必要に応じた読み込みの最適化により、重複リクエストを削減し、初回読み込み時のリソース負荷を軽減。モバイルでの利用体験を改善。',
          '共通コンポーネントの抽象化とモジュール化により重複コードを削減し、モジュールの再利用性を高め、以降の機能追加・保守にかかるコストを低減。',
        ],
      },
      {
        category: 'パートナープラットフォーム',
        title: 'パートナーワークベンチ',
        description: '華為のパートナー向けに、業務機会、契約・注文、トレーニング、販売支援、プロジェクト管理、パートナー管理、データ分析、製品・ソリューション検索、パートナーコミュニティなどを集約したワンストップの業務支援・管理プラットフォームです。商談、注文、草案などの外部業務システムとも連携し、システム間のデータ連携と業務プロセスの協調を実現します。',
        technologies: ['Vue 3', 'Vuex', 'Vue Router', 'Vite', 'Vant', 'Git'],
        challenges: [],
        solutions: [],
        responsibilities: [
          '複数の主要業務モジュールのフロントエンド設計・開発に参画し、機能実装、業務画面のインタラクション、共通コンポーネントの開発を担当。',
          '多様で複雑な業務シナリオに対応するため、コンポーネント化・モジュール化を推進し、共通業務コンポーネントを抽象化。モジュール間のコード構成と再利用性を改善。',
          '商談、注文、草案などの外部システムとのフロントエンド連携とAPI結合テストを担当。システム間のデータ連携、APIパラメーターやデータ構造の調整、業務ステータスの処理、エラー通知に対応し、関連する業務フローの連携を推進。',
          '一部業務モジュールの技術方針に関する検討や開発調整に参画し、実装方針、コード品質、機能リリースを技術面から確認。',
          '業務要件に応じた継続的な開発において、担当モジュールの新機能開発、既存機能の改善、不具合調査を行い、複数バージョンの継続的なリリースを支援。',
        ],
        results: [
          '複雑な業務モジュールの統合：複数の業務モジュールをフロントエンドで開発・統合し、各業務シナリオの機能間連携とモジュール間の関係を整理。多様な業務を一つのプラットフォームで扱い、継続的に拡張できる基盤を整備。',
          'システム横断の業務フロー連携：商談、注文、草案などの外部システムとのAPI連携と結合テストを推進。システムごとに異なるデータ構造、APIパラメーター、業務ステータスを調整し、システム間のデータ連携と業務プロセスの接続を実現。',
          '保守性・拡張性の向上：共通コンポーネントの抽象化、モジュールの責務整理、コード構成の改善により、モジュール間の結合と重複開発を抑制。コードの再利用性とその後の開発効率を向上。',
          '複数バージョンの開発・リリースを支援：一部モジュールの開発調整と技術レビューを担当し、技術方針の実装、課題の調査、機能リリースを推進。担当モジュールの計画的な継続リリースに貢献。',
        ],
      },
      {
        category: 'ローコード業務システム',
        title: '意向書',
        description: 'ファーウェイ社内開発のAUIを用いたローコードプロジェクトで、正式な協業契約を締結する前の重要な業務プロセスです。協業意向、協業方式・条件、財務・機密保持条項、紛争解決、適用範囲、署名方法・日付などを管理します。',
        technologies: ['AUI', 'Vue 3', 'JavaScript', 'TypeScript'],
        challenges: [],
        solutions: [],
        responsibilities: [
          '協業意向、協業方式、協業条件、財務条件など複数の業務モジュールのフロントエンド開発を担当。業務タイプごとに異なるフォーム構成、項目設定、業務ルールに応じて、画面と操作ロジックを実装。',
          'ファーウェイ独自のAUIローコードプラットフォームを用いて業務機能を開発。Vue 3、JavaScript、TypeScriptを組み合わせ、ローコードの開発効率を活かしながら複雑な業務要件にも柔軟に対応。',
          '複数の業務モジュールに共通するフォームや操作機能について実装方法を統一し、重複開発と後続の仕様変更に伴う修正コストを削減。',
          '短い開発期間と頻繁な要件変更の中で、影響範囲を迅速に整理して機能を適宜調整。開発中の課題にも対応し、各モジュールの計画的な進行を支援。',
        ],
        results: [
          '協業意向、協業方式、協業条件、財務条件など複数の業務モジュールを開発し、協業開始前に必要な各種情報の登録・更新・管理を実現。',
          'AUIローコードプラットフォームのコンポーネントと設定機能を活用して業務機能を開発し、重複コーディングを抑えて開発効率を向上。',
          '共通する機能の実装方法を統一し、重複開発を削減。コードの再利用性と保守効率を向上。',
          '短い開発期間と頻繁な要件変更の中でも、担当モジュールの開発と複数回の改修を計画どおりに完了し、プロジェクトの期限内リリースに貢献。',
        ],
      },
      {
        category: 'IoT・鉄道交通ビッグデータ診断システム',
        title: 'ビッグデータ診断システム',
        description: '鉄道信号システム向けのIoTデータ監視・総合分析プラットフォームです。車両、車上・地上設備、無線通信機器など現場設備の稼働データを収集し、バックエンドで処理したうえでフロントエンドへ配信することで、設備状態の監視、列車の動態追跡、故障診断、保守管理を実現します。日常保守管理、ビッグデータ分析に基づく予測保全、帳票、保守知識データベース、ユーザーからのメッセージ、システム・権限管理などの機能を備えています。',
        technologies: ['Vue 2', 'Vuex', 'Vue Router', 'Axios', 'Webpack', 'ECharts', 'WebSocket', 'Element', 'Git', 'Canvas'],
        challenges: [],
        solutions: [],
        responsibilities: [
          'フロントエンド開発全体を主導し、機能設計、モジュール分割、主要な業務機能の実装を担当。コンポーネント化・モジュール化によってコードを整理し、複数の業務モジュールの開発・保守を支える構成を整備。',
          'Canvasを用いた列車ダイヤの動的可視化機能を単独で開発。路線と列車を描画し、WebSocketでバックエンドから受信したリアルタイム位置データに応じて、列車の位置を路線図上で更新。',
          'バックエンドから配信される車両、車上・地上設備のデータを取り込み、列車の運行状態、設備情報、緊急アラートをリアルタイムに表示。運行状況や設備異常を直感的に把握できる画面を実現。',
          'EChartsで複数の可視化チャートを開発し、IoT機器から収集した多面的な稼働・診断データをグラフ化。設備状態の確認やデータ分析をしやすく改善。',
          'VuexとVue Routerでアプリケーションの状態管理とルーティングを構成。共通コンポーネントとモジュールの再利用を進め、コード構成を改善してモジュール間の結合を抑制。',
        ],
        results: [
          'フロントエンド開発を主導し、車両管理、設備保守、診断分析、帳票などの主要業務を支援。現場設備データのリアルタイム監視・可視化と総合分析を実現。',
          'CanvasとWebSocketによる列車ダイヤの動的監視機能を単独で開発。列車の位置・運行状態と車上・地上設備の情報を路線図上に統合し、運行状況や緊急異常をリアルタイムに可視化。',
          'EChartsで多面的なデータ可視化チャートを構築し、複雑なIoT設備の診断データを直感的に把握できる形で表示。設備の稼働状態や診断結果を確認・分析しやすく改善。',
          'コンポーネント化・モジュール化と共通機能の再利用により、重複開発を削減。フロントエンド開発と、その後の機能追加・保守の効率を向上。',
        ],
      },
      {
        category: 'IoT・鉄道車両向け車載保守端末',
        title: '車載メンテナンス端末',
        description: '保守担当者向けのH5車載点検端末です。列車の主要なパラメーターや機器状態をワンタップで一括確認できます。キースイッチ、ATO起動ボタン、モード切替ボタン、ドアモード（AA・AM・MM）、ドアロック状態、非常ブレーキの応答、冗長系の出力状態などを迅速に点検し、異常の早期発見や列車状態の判断、故障箇所の特定を支援します。',
        technologies: ['Vue 2', 'Vuex', 'Axios', 'Vue Router', 'Webpack', 'Mint UI', 'Git'],
        challenges: [],
        solutions: [],
        responsibilities: [
          '車載検修端末のフロントエンド開発全般を単独で担当。画面実装、業務操作、API連携、機能テストまで一貫して対応し、検修業務のデジタル化を実現。',
          '車載機器のネットワーク接続とバックエンドAPIを通じて、H5端末と列車設備間のデータ連携を実装。検修担当者が画面上で「ワンタッチ検査」を実行すると、列車の主要パラメーターや設備状態を自動取得できるようにし、従来の項目ごとの手作業によるデータ収集を置き換え。',
          '「路線ごと」のUIレイアウト、検査項目、データインターフェースの違いに対応し、「複数路線」向けの画面調整とデータ連携の課題を解決。',
          '適切なコンポーネント化・モジュール化とコード構成により、重複開発を減らし、機能開発と改修の期間を短縮。',
        ],
        results: [
          '車載検修業務をデジタル化。従来の手作業によるデータ収集・分析から、ネットワーク接続されたH5端末で検査データを一括取得し、複数の列車パラメーターと設備状態をまとめて確認できる方式へ移行。',
          'フロントエンド全体を単独で開発。コンポーネント化・モジュール化とコード構成の改善で重複作業を減らし、開発期間を大幅に短縮。',
          '「複数路線」におけるUIレイアウト調整とデータ連携の課題を解決し、複雑な検修業務に対応。',
          '検修担当者のデータ収集・分析の手順を簡素化し、従来の手作業による方法と比べて検修効率を約50％向上。',
        ],
      },
      {
        category: 'IoT・鉄道向け5G運用監視ダッシュボード',
        title: '5Gクラウド信号運用・保守診断システム',
        description: '「5Gクラウド信号運用・保守診断システム」は、列車の状態、車輪径誤差の評価、車上へのデータ送信状況をリアルタイムに監視する大型表示システムです。列車・地上間のマルチベアラ5G指標（通信速度、パケット損失、遅延、ジッター）、車上5G TAUの稼働状況、駅およびクラウド信号機器室の5G電波状況も監視・表示します。',
        technologies: ['Vue 3', 'Vuex', 'Vue Router', 'Vite', 'WebSocket', 'ECharts', 'Git'],
        challenges: [],
        solutions: [],
        responsibilities: [
          '画面実装、リアルタイムデータ連携、グラフ開発、大画面への対応を含むフロントエンド開発全般を単独で担当。',
          'WebSocketでバックエンドから配信されるリアルタイムデータを受信し、EChartsを用いて列車の運行状況、5Gネットワーク品質指標、車上TAUの状態、各駅の信号状況を動的に表示。',
          '設計稿と実際の表示画面のサイズが異なる課題に対応するため、画面全体を欠けやスクロールバーなしで表示できるレスポンシブな縮尺方式を設計。',
          'Vue 3、Vuex、Vue Routerを用いて画面構成と状態管理を整理し、各監視モジュールの統合と画面操作を実装。',
        ],
        results: [
          'フロントエンド開発全体を単独で完了し、列車の運行状況、列車・地上間の5G通信品質、各駅の信号状況など多様なデータのリアルタイム可視化を実現。',
          '幅・高さの比率に基づく自動縮尺方式を設計・実装。画面と設計稿の幅・高さの比率を動的に算出し、小さい方を共通の縮尺として適用することで、異なるサイズの大画面におけるレイアウト調整を解決し、スクロールバーのない全画面表示を実現。',
          '大画面の表示を最適化し、通常1秒以内に画面を表示。',
        ],
      },
      {
        category: '鉄道総合運用監視ダッシュボード',
        title: '福州地下鉄スマート運用保守統合プラットフォーム',
        description: '福州地下鉄の運用保守管理に向けた大画面監視システムです。列車のオンライン状態、機器モジュールの稼働状況、データダウンロードの状態に加え、列車・地上設備・信号の故障統計を集約して表示します。また、運用保守に関する通知や未処理タスクの対応状況も表示し、管理者に地下鉄システムの稼働状況と故障状況を総合的に把握できる画面を提供します。',
        technologies: ['Vue 3', 'Vuex', 'Vue Router', 'WebSocket', 'Vite', 'ECharts', 'Element UI', 'Git'],
        challenges: [],
        solutions: [],
        responsibilities: [
          '大画面ページの実装、データインターフェース連携、グラフ開発、画面調整を含むプロジェクト全体のフロントエンド開発を単独で担当。',
          'WebSocketでバックエンドのデータに接続し、EChartsを用いて列車のオンライン状態、機器モジュールの状態、故障統計、通知や未処理タスクなどを動的に表示。',
          '設計稿と実際の大画面解像度の違いに対応するため、異なるサイズの大画面にレイアウト全体を適合させる自動縮尺方式を設計。',
        ],
        results: [
          'プロジェクト全体のフロントエンド開発を単独で完了し、列車の稼働状況、機器のオンライン状態、故障統計、運用保守タスクを集約して可視化。',
          '画面と設計稿の幅・高さの比率を動的に算出し、小さい方を共通の縮尺として適用する方式を実装。異なるサイズの大画面におけるレイアウトの課題を解決し、スクロールバーのない全画面表示を実現。',
          'ページの読み込みと描画を最適化し、通常1秒以内に表示。',
        ],
      },
      {
        category: '金融 / 管理システム',
        title: '大金所（松果財富）',
        description: '「松果財富」は、もともと「大金所」という名称の、雪松控股傘下の投資・資産運用プラットフォームです。雪松が大連金融資産取引所に出資した後、プラットフォームは雪松の上流サプライチェーングループおよび化学、不動産、文化・観光などの産業分野に融資と投資・資産運用サービスを提供しています。管理システムは、プラットフォームの業務管理、商品運営および関連業務プロセスを支援します。',
        technologies: ['Vue 2', 'Vuex', 'Vue Router', 'Axios', 'Webpack', 'Element', 'Git', 'TypeScript'],
        challenges: [],
        solutions: [],
        responsibilities: [
          '「松果财富 / 大金所」管理システムのフロントエンド開発を担当し、プラットフォームの業務モジュール構築、機能改善および日常的な保守に携わり、投資・資産運用プラットフォームの運営管理を支援。',
          '管理システム内に多数存在する重複したページ構造と操作ロジックに対し、サイドバー、上部ナビゲーション、ページネーション、検索、データインポート、ファイルダウンロードなどの共通コンポーネントと汎用メソッドを抽象化・実装し、再利用可能なフロントエンド開発基盤を構築。',
          'コンポーネント化・モジュール化設計と共通コードの再利用により、プロジェクトのコード構成を最適化。重複開発を減らし、モジュール間の結合度を下げ、機能拡張と今後の保守効率を向上。',
          '金融業務データの伝送セキュリティ要件に対応するため、RSA + AESのハイブリッド暗号化方式を採用。業務データをAESで暗号化し、AES鍵をRSAで暗号化することで、フロントエンドとバックエンド間の暗号化データ通信を実現し、機密性の高い業務データ伝送の安全性を強化。',
          'プロジェクトの機能改善とバージョンアップに継続して参加し、業務要件に迅速に対応。2週間ごとのリリースサイクルとコード品質を支援。',
        ],
        results: [
          '共通コンポーネント、汎用メソッドおよびモジュール化設計により重複開発を減らし、全体の開発期間を約20％短縮。',
          '統一された管理画面向け共通コンポーネントと機能再利用の仕組みを構築し、新規業務モジュールの開発コストを抑え、今後の機能拡張と保守効率を向上。',
          'RSA + AESのハイブリッド暗号化通信方式を導入し、金融業務における機密データ伝送のセキュリティ要件に対応。',
          '2018年5月の初回リリース以降、プロジェクトの継続的な改善を支援。数十回にわたるバージョンリリースを経て、プラットフォームの業務機能と販促活動の継続的な実施を支援。',
          '2019年末までに、プラットフォームの製品販売額が50億人民元を突破。',
        ],
      },
      {
        category: '社内サービス / H5・管理画面',
        title: '雪松大学',
        description: '「雪松大学」は、雪松社内の従業員向けにイベントや研修を管理するプラットフォームです。イベントの予約、申込、情報検索、運営管理などの機能を提供します。「雪松互聯」APPに組み込まれたH5モバイル版と、それに対応する運営管理システムで構成され、従業員と運営管理担当者それぞれにサービスを提供します。',
        technologies: ['Vue 2', 'Vuex', 'Vue Router', 'Axios', 'Webpack', 'Element', 'Git', 'Mint UI'],
        challenges: [],
        solutions: [],
        responsibilities: [
          '「雪松大学」申込システムのフロントエンド開発を主導し、「雪松互聯」APPに組み込まれたH5モバイル版および対応する運営管理システムの機能開発と全体実装を担当。',
          'モバイル利用を想定し、Mint UIでH5ページと操作機能を構築。lib-flexibleによりviewportに基づくレイアウト調整を実現し、さまざまなサイズのスマートフォンに対応。',
          '運営管理システムではElement UIを用いてページと共通操作コンポーネントを構築し、イベント管理、申込管理および関連する運営機能を開発。',
          'コンポーネント化・モジュール化設計により、共通のページ構造と業務操作ロジックを抽象化し、重複コードを減らして再利用性と機能改善の効率を向上。',
        ],
        results: [
          'H5モバイル版と運営管理システムの2つのフロントエンドを主導して開発し、従業員向けのイベント予約、申込、検索から管理側の運営業務まで、一連の業務フローを実現。',
          'Mint UI、Element UI、lib-flexibleを組み合わせ、モバイル版とPC管理画面に適したフロントエンド開発方式を確立し、各端末向けの開発効率を向上。',
          'コンポーネント化・モジュール化と共通機能の再利用により、従来の開発方法と比べて全体の開発効率を約25％向上させ、迅速な開発と継続的な改善を支援。',
        ],
      },
      {
        category: '金融 / 資産管理',
        title: '資産管理システム',
        description: '資産管理システムは雪松信託向けのプラットフォームです。信託商品の保守、資産引き渡し管理、資産統計分析などの業務機能を備え、信託資産の日常管理、業務の進捗管理、データ集計のための統一管理基盤を提供します。',
        technologies: ['Vue 2', 'Vuex', 'Vue Router', 'Axios', 'Webpack', 'Element', 'Git'],
        challenges: [],
        solutions: [],
        responsibilities: [
          'プロジェクトのフロントエンド開発に参加し、信託商品管理、資産引き渡し管理、資産統計分析などの業務モジュールの画面開発、操作機能の実装、フロントエンド・バックエンド間のAPI連携を担当。',
          '共通コンポーネントと共通メソッドを抽出し、コンポーネント化・モジュール化によってコードを構成することで、業務モジュール間の重複実装を削減。',
          'RSA + AESのハイブリッド暗号化方式の実装に参加。AESで業務データを暗号化し、RSAでAES鍵を暗号化することで、金融業務データの伝送を保護。',
        ],
        results: [
          '担当業務モジュールのフロントエンド開発を完了し、信託資産管理に関する業務のオンライン処理を支援。',
          '共通コンポーネントの抽出とモジュール化開発により重複コーディングを減らし、機能開発期間を短縮して開発効率を向上。',
          'コード構成の最適化と共通機能の再利用により重複実装を減らし、プロジェクトのバグ数を約15％削減。',
          'RSA + AESのハイブリッド暗号化方式により、フロントエンド・バックエンド間の業務データ伝送の安全性を強化。',
        ],
      },
    ],
    contactTitle: '一緒に働く機会をお待ちしています',
    contactDescription: 'フロントエンドエンジニアの採用や協業に関するご連絡をお待ちしています。',
    contactEmailLabel: 'メールで連絡する',
    footerQuote: '世の中に成功はただ一つ。自分の好きな生き方で人生を送れること。',
    footerBackToTop: 'ページ上部へ戻る',
  },
  en: {
    pageTitle: 'Frontend Engineer Portfolio | Frontend Engineer',
    description:
      'Portfolio of a frontend engineer pursuing opportunities in Japan. Experience with business applications and technologies including HTML5, CSS3, JavaScript, TypeScript, React, and Vue.',
    skipLink: 'Skip to main content',
    homeLabel: 'Home',
    navigationLabel: 'Main navigation',
    projectsNav: 'Projects',
    experienceNav: 'Experience',
    contactNav: 'Contact',
    profileNav: 'Profile',
    focusNav: 'Skills',
    githubProfileText: 'View GitHub profile',
    languageLabel: 'Display language',
    githubLabel: 'Open GitHub profile in a new tab',
    themeToLight: 'Switch to light theme',
    themeToDark: 'Switch to dark theme',
    light: 'LIGHT',
    dark: 'DARK',
    heroTitleFirst: 'WEI ZONGZUO',
    heroTitleSecond: 'Frontend Engineer',
    heroEducationSchool: 'North Minzu University',
    heroEducationPeriod: 'August 2013 – June 2017',
    heroEducationDegree: "Bachelor's degree",
    heroSummaryTitle: 'Career overview',
    heroSummaryParagraphs: [
      'I have approximately {experience} of hands-on frontend development experience. My core technologies are Vue 2/3, React, and TypeScript, and I have contributed to a wide range of web applications, including internal business systems, partner portals, financial management systems, and railway monitoring and diagnostics systems with large-screen visualizations. I also specialize in real-time data visualization using ECharts and WebSocket.',
      'I have led frontend development on several projects and have also independently owned entire frontend modules as the sole frontend developer. I focus on improving development efficiency and code quality through component-based and modular design.',
      'Starting from product requirement documents, I can understand business context and product logic, clarify functional requirements and workflows, and translate them into concrete frontend implementation plans.',
    ],
    experienceTitle: 'Experience',
    experienceRangeLabel: 'CAREER',
    experienceProjectsLabel: 'Key projects',
    experienceProjectDetailsTooltip: 'Click to view details',
    experienceProjectNoDetailsTooltip: 'No linked project details',
    experienceProjectDetails: {
      'Commercial Sales Platform': 'Commercial Sales Platform (Mobile)',
      'Partner Workbench': 'Partner Workbench',
      'Intent Orders': 'Intent Order',
      'Big Data Diagnostic System': 'Big Data Diagnostic System',
      'Onboard Maintenance Terminal': 'Onboard Maintenance Terminal',
      '5G Cloud Signal Operations and Maintenance Diagnosis System': '5G Cloud Signal Operations and Maintenance Diagnosis System',
      'Fuzhou Metro Intelligent Operations and Maintenance Integrated Platform': 'Fuzhou Metro Intelligent Operations and Maintenance Integrated Platform',
      Dajinsuo: 'Dajinsuo (Songguo Wealth)',
      'Cedar University': 'Cedar University',
      'Asset Management System': 'Asset Management System',
    },
    workHistory: [
      {
        company: 'Kezhirui Talent Consulting Co., Ltd. (Huawei OD)',
        period: '2023.07–2026.06',
        summary: 'Led frontend development for one-stop work systems serving internal teams and external partners.',
        projects: ['Commercial Sales Platform', 'Contract Orders', 'Intent Orders', 'Business Cards', 'Partner Official Website', 'Partner Workbench'],
      },
      {
        company: 'Siemens Mobility Technologies Co., Ltd.',
        period: '2021.01–2022.11',
        summary: 'Led frontend development for railway technology systems.',
        projects: [
          'Big Data Diagnostic System',
          'Onboard Maintenance Terminal',
          '5G Cloud Signal Operations and Maintenance Diagnosis System',
          'Fuzhou Metro Intelligent Operations and Maintenance Integrated Platform',
          'Real-time Monitoring System',
        ],
      },
      {
        company: 'Guangdong-Hong Kong-Macau Greater Bay Area Hard Technology Innovation Research Institute',
        period: '2020.11–2021.01',
        summary: 'Led frontend development for the following systems.',
        projects: ['Satellite Measurement and Operation Control System', 'Centralized Operation Management Platform'],
      },
      {
        company: 'Cedar Holdings Group Co., Ltd.',
        period: '2018.04–2020.10',
        summary: 'Led frontend development for group services and business systems.',
        projects: ['Dajinsuo', 'Cedar University', 'Asset Management System'],
      },
      {
        company: 'Guangzhou Lete Information Technology Co., Ltd.',
        period: '2017.02–2018.04',
        summary: 'Developed the frontend for an app and the company website.',
        projects: ['Lete Transportation App', 'Lete Official Website'],
      },
    ],
    profileIndex: 'PROFILE',
    profileTitleFirst: 'About me',
    profileTitleSecond: '',
    profileDescription:
      'I have worked on frontend development with Vue, React, JavaScript, and TypeScript. My experience centers on enterprise application implementation, component development, and frontend performance improvements.',
    profileHighlights: [
      { title: 'Experience', description: '', dynamicExperience: true },
      { title: 'Frameworks', description: 'Vue 2 / Vue 3 · React' },
      { title: 'Product area', description: 'Enterprise business systems' },
      { title: 'Focus', description: 'Component design · Performance' },
    ],
    focusTitle: 'Skills',
    focusAreas: [
      {
        title: 'Web Fundamentals',
        technologies: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript'],
      },
      {
        title: 'Frameworks',
        technologies: ['React', 'Vue 3', 'Vue 2', 'Uni-App', 'jQuery'],
      },
      {
        title: 'Tools & Networking',
        technologies: ['Git', 'Vite', 'Webpack', 'Axios', 'WebSocket'],
      },
      {
        title: 'UI & Data Viz',
        technologies: ['Element', 'Vant', 'Mint UI', 'ECharts', 'Canvas'],
      },
    ],
    projectsTitle: 'Projects',
    projectsIntro: 'Business applications and railway systems from my professional experience.',
    projectRoleLabel: 'Role',
    projectNamesLabel: 'Related projects',
    projectDetailsLabel: 'View project details',
    projectCloseLabel: 'Close',
    projectPauseAutoplayLabel: 'Pause automatic scrolling',
    projectResumeAutoplayLabel: 'Resume automatic scrolling',
    projectPreviousLabel: 'Previous project',
    projectNextLabel: 'Next project',
    projectCounterLabel: 'Project',
    projectTechnologiesLabel: 'Technologies',
    projectResponsibilitiesLabel: 'Project Responsibilities',
    projectResultsLabel: 'Project Results',
    projects: [
      {
        category: 'BUSINESS SYSTEMS',
        title: 'Enterprise business management systems',
        description: 'Frontend development for work systems used by internal teams and external partners.',
        role: 'Led frontend development.',
        names: ['Commercial Sales Platform', 'Partner Official Website', 'Partner Workbench', 'Business Cards'],
      },
      {
        category: 'RAILWAY / IoT',
        title: 'Railway IoT systems',
        description: 'Frontend development for railway diagnostics, maintenance, and operations monitoring.',
        role: 'Led frontend development across multiple systems.',
        names: ['Big Data Diagnostic System', 'Onboard Maintenance Terminal', '5G Cloud Signal Operations and Maintenance Diagnosis System', 'Fuzhou Metro Intelligent Operations and Maintenance Integrated Platform', 'Real-time Monitoring System'],
      },
      {
        category: 'ORDER / OPERATIONS',
        title: 'Order and business support systems',
        description: 'Applications supporting internal workflows such as orders and business intentions.',
        role: 'Led frontend development in assigned areas.',
        names: ['Contract Orders', 'Intent Orders', 'Dajinsuo', 'Asset Management System'],
      },
    ],
    projectCases: [
      {
        category: 'BUSINESS SYSTEMS',
        title: 'Commercial Sales Platform (Mobile)',
        description: 'A one-stop mobile platform for internal sales teams, built on the Red Edition of WeLink. Integrated with WeLink platform capabilities through the WeLink JS SDK, it brings together key stages of the sales process—including deal registration, opportunity management, proposal drafting, commercial operations, order and contract management, and partner development—in a single entry point for employees to work and manage sales activities on the go.',
        technologies: ['Vue 3', 'Vuex', 'Vue Router', 'Vite', 'Git', 'Vant'],
        challenges: [],
        solutions: [],
        responsibilities: [
          'Contributed to discussions on the overall frontend solution and architecture, and owned detailed design and development for assigned business modules.',
          'Used Vue and the WeLink JS SDK to integrate mobile business features with capabilities provided by the enterprise collaboration platform.',
          'Applied component-based and modular design to each business area, extracting shared business components to reduce duplication and improve code reuse.',
          'Optimized mobile resource loading with browser caching, lazy loading, and asynchronous loading to improve page performance.',
          'Designed code structures, developed features, and maintained assigned modules to keep them extensible and maintainable.',
        ],
        results: [
          'Designed and developed the assigned business modules, integrating their features with the WeLink platform.',
          'Reduced duplicate resource requests and the initial page-load burden through browser caching and on-demand loading, improving the mobile experience.',
          'Reduced duplicated code through reusable shared components and modular design, improving reuse and lowering the cost of future enhancements and maintenance.',
        ],
      },
      {
        category: 'PARTNER PLATFORM',
        title: 'Partner Workbench',
        description: 'A one-stop business support and management platform for Huawei partners. It brings together business opportunities, contracts and orders, training and enablement, sales and marketing support, project and partner relationship management, analytics, product and solution information, and a partner community. Integrations with external opportunity, order, and draft systems enable cross-system data exchange and coordinated workflows.',
        technologies: ['Vue 3', 'Vuex', 'Vue Router', 'Vite', 'Vant', 'Git'],
        challenges: [],
        solutions: [],
        responsibilities: [
          'Contributed to frontend design and development across several core business modules, implementing features and user interactions and building shared components.',
          'Promoted component-based and modular design to address the platform’s breadth of modules and complex workflows. Extracted reusable business components and improved code organization and reuse across modules.',
          'Owned frontend integrations and API testing with external opportunity, order, and draft systems. Handled cross-system data exchange, API parameter and data-model mapping, business-state handling, and error reporting to connect end-to-end workflows.',
          'Contributed to technical planning and development coordination for selected modules, reviewing implementation approaches, code quality, and feature delivery.',
          'Supported ongoing releases by developing features, improving existing functionality, and investigating issues in assigned modules.',
        ],
        results: [
          'Integrated complex business modules: Delivered and integrated multiple frontend modules, clarifying interactions across business scenarios and relationships between modules to support a unified platform that can continue to grow.',
          'Connected cross-system workflows: Advanced API integration and testing with opportunity, order, and draft systems. Mapped differences in data models, API parameters, and business states to enable reliable data exchange and workflow continuity.',
          'Improved maintainability and extensibility: Reduced coupling and duplicated development through shared-component design, clearer module responsibilities, and better code organization, increasing reuse and speeding up future iterations.',
          'Supported delivery across multiple releases: Helped coordinate development and review technical implementation for selected modules, driving issue resolution and feature delivery to keep planned releases on track.',
        ],
      },
      {
        category: 'LOW-CODE BUSINESS SYSTEM',
        title: 'Intent Order',
        description: 'A low-code project built with Huawei’s in-house AUI platform and an important step before signing a formal cooperation agreement. It brings together cooperation intent, cooperation methods and terms, financial and confidentiality clauses, dispute resolution, scope, and signing details.',
        technologies: ['AUI', 'Vue 3', 'JavaScript', 'TypeScript'],
        challenges: [],
        solutions: [],
        responsibilities: [
          'Developed frontend features across modules covering cooperation intent, cooperation methods and terms, and financial terms. Implemented the corresponding pages and interactions to accommodate differences in form layouts, field configurations, and business rules.',
          'Built business features on Huawei’s in-house AUI low-code platform, combining Vue 3, JavaScript, and TypeScript to balance low-code development speed with the flexibility needed for complex requirements.',
          'Standardized implementation patterns for similar forms and interactions across modules, reducing duplicated development and the cost of future changes.',
          'Worked through a tight schedule and frequent requirement changes by quickly assessing impact, adjusting feature implementations, and resolving development issues to keep each module on track.',
        ],
        results: [
          'Delivered multiple modules for cooperation intent, methods, terms, and financial terms, enabling the entry, maintenance, and management of information required in the pre-cooperation stage.',
          'Used AUI low-code components and configuration capabilities to deliver business features with less repetitive coding and greater development efficiency.',
          'Reduced duplicate development through consistent implementations of similar features, improving code reuse and maintainability.',
          'Completed assigned modules and multiple rounds of iteration on schedule despite tight timelines and frequent requirement changes, helping ensure timely project delivery.',
        ],
      },
      {
        category: 'IoT / Big Data Diagnostic System for Rail Transit',
        title: 'Big Data Diagnostic System',
        description: 'An IoT monitoring and analytics platform for railway signalling systems. It collects operational data from field equipment—including trains, onboard and trackside equipment, and wireless communications devices—and delivers the processed data from the backend to the frontend. The platform supports equipment monitoring, train tracking, fault diagnosis, and maintenance management, alongside routine maintenance, big-data analytics and predictive maintenance, reporting, a maintenance knowledge base, user feedback, and system and access management.',
        technologies: ['Vue 2', 'Vuex', 'Vue Router', 'Axios', 'Webpack', 'ECharts', 'WebSocket', 'Element', 'Git', 'Canvas'],
        challenges: [],
        solutions: [],
        responsibilities: [
          'Led frontend development end to end, covering feature design, module breakdown, and implementation of core functionality. Organized the code into components and modules to support development and maintenance across the system.',
          'Independently developed a dynamic train-diagram view with Canvas, drawing tracks and trains and updating train positions in real time from location data pushed by the backend over WebSocket.',
          'Integrated backend data for trains and onboard and trackside equipment to show train status, equipment conditions, and urgent alerts in real time, giving users a clear view of operations and faults.',
          'Built ECharts visualizations that turn operational and diagnostic data from IoT equipment—including vehicles, onboard and trackside systems, and wireless devices—into clear, useful views for monitoring and analysis.',
          'Used Vuex and Vue Router to manage application state and routing. Improved code organization and reduced coupling through shared components and reusable modules.',
        ],
        results: [
          'Led frontend delivery for the system, enabling real-time monitoring, visualization, and analysis of railway field data across core areas such as vehicle management, equipment maintenance, diagnostics, and reporting.',
          'Built a dynamic train-monitoring view with Canvas and WebSocket, combining live train positions and status with onboard and trackside equipment data to visualize train movements and urgent events in real time.',
          'Created multidimensional ECharts visualizations that make complex IoT equipment diagnostics easier to read, helping users review equipment status and analyze faults.',
          'Reduced duplicated work through componentization, modularization, and shared functionality, improving frontend delivery speed and the efficiency of future updates and maintenance.',
        ],
      },
      {
        category: 'IoT / Rail Transit Onboard Maintenance Terminal',
        title: 'Onboard Maintenance Terminal',
        description: 'An H5 onboard maintenance terminal for railway technicians, providing one-touch checks of key train parameters and equipment status. Technicians can quickly verify key switches, the ATO start button, mode up/down buttons, door modes (AA, AM, MM), door-lock status, emergency-brake feedback, and redundant status outputs. The terminal helps identify abnormalities early, assess train operating conditions, and pinpoint faults.',
        technologies: ['Vue 2', 'Vuex', 'Axios', 'Vue Router', 'Webpack', 'Mint UI', 'Git'],
        challenges: [],
        solutions: [],
        responsibilities: [
          'Independently delivered all frontend development for the onboard maintenance terminal, including page implementation, user interactions, API integration, and feature testing, digitizing the inspection workflow.',
          'Connected the H5 terminal to train equipment through onboard connectivity and backend APIs. A tap on “One-Touch Check” automatically retrieves key train parameters and equipment status, replacing manual, item-by-item data collection.',
          'Addressed UI layout, inspection parameter, and API differences across “different rail lines,” resolving the adaptation and data integration challenges of a “multi-line” terminal.',
          'Used a well-structured component and module design to reduce duplicated work and shorten feature development and iteration cycles.',
        ],
        results: [
          'Digitized onboard inspections: instead of manually collecting and then analyzing data, maintenance staff can retrieve and review multiple train parameters and equipment statuses at once through the connected H5 terminal.',
          'Delivered the entire frontend independently. Componentization, modularization, and a more maintainable code structure reduced duplicated work and significantly shortened overall frontend development time.',
          'Resolved “multi-line” UI adaptation and data integration challenges to support complex maintenance workflows.',
          'Simplified data collection and analysis for maintenance staff, improving inspection efficiency by approximately 50% compared with the traditional manual process.',
        ],
      },
      {
        category: 'IoT / Rail Transit 5G Intelligent Operation & Maintenance Dashboard',
        title: '5G Cloud Signal Operations and Maintenance Diagnosis System',
        description: 'The 5G Cloud Signal Operations and Maintenance Diagnosis System is a real-time monitoring display for train status, wheel-diameter error assessments, and onboard data delivery. It also monitors and displays multi-bearer train-to-ground 5G metrics—throughput, packet loss, latency, and jitter—as well as onboard 5G TAU status and 5G signal conditions at stations and the cloud signalling equipment room.',
        technologies: ['Vue 3', 'Vuex', 'Vue Router', 'Vite', 'WebSocket', 'ECharts', 'Git'],
        challenges: [],
        solutions: [],
        responsibilities: [
          'Independently handled all frontend development, including page implementation, real-time data integration, chart development, and large-screen adaptation.',
          'Received live data pushed from the backend over WebSocket and used ECharts to dynamically display train operating status, 5G network quality metrics, onboard TAU status, and signal conditions at each station.',
          'Designed a responsive scaling approach to ensure the entire page fits on screens whose dimensions differ from the design, without clipping or scrollbars.',
          'Used Vue 3, Vuex, and Vue Router to structure the pages and manage application state, integrating the monitoring modules and implementing their interactions.',
        ],
        results: [
          'Independently delivered the complete frontend, providing real-time visual monitoring of train operations, train-to-ground 5G network quality, station signals, and other key metrics.',
          'Designed and implemented an aspect-ratio-based scaling approach: dynamically calculated the width and height ratios between the display and the design, then applied the smaller ratio as a uniform scale factor. This solved layout issues across different display sizes and enabled full-screen presentation without scrollbars.',
          'Optimized the large-screen rendering experience; the page typically loads in under one second.',
        ],
      },
      {
        category: 'IoT / Rail Transit Integrated Maintenance Dashboard',
        title: 'Fuzhou Metro Intelligent Operations and Maintenance Integrated Platform',
        description: 'A large-screen monitoring system for Fuzhou Metro operations and maintenance. It provides a consolidated view of train online status, equipment module status, data download status, and statistics on train, trackside, and signal faults. It also shows the handling status of maintenance notifications and pending tasks, giving managers an integrated view of metro system operations and faults.',
        technologies: ['Vue 3', 'Vuex', 'Vue Router', 'WebSocket', 'Vite', 'ECharts', 'Element UI', 'Git'],
        challenges: [],
        solutions: [],
        responsibilities: [
          'Independently led all frontend development, including large-screen page implementation, data API integration, chart development, and page adaptation.',
          'Connected to backend data over WebSocket and used ECharts to dynamically display train online status, equipment module status, fault statistics, notifications, and pending tasks.',
          'Designed a responsive scaling solution to adapt the overall layout to different large-screen sizes when the design dimensions differed from the actual screen resolution.',
        ],
        results: [
          'Independently completed all frontend development, providing a consolidated visual display of train operations, equipment online status, fault statistics, and maintenance tasks.',
          'Implemented an overall scaling solution that dynamically calculates the width and height ratios of the screen and design, then uses the smaller ratio as a uniform scale factor. This solved layout issues across different large-screen sizes and enabled full-screen display without scrollbars.',
          'Optimized page loading and rendering; the page typically displays within one second.',
        ],
      },
      {
        category: 'FINANCE / ADMINISTRATION',
        title: 'Dajinsuo (Songguo Wealth)',
        description: 'Songguo Wealth, originally known as Dajinsuo, is an investment and wealth management platform under Xuesong Holdings. After Xuesong invested in the Dalian Financial Assets Exchange, the platform provided financing and investment and wealth management services to Xuesong’s upstream supply chain group and industries such as chemicals, real estate, and cultural tourism. Its administration system supports platform business management, product operations, and related workflows.',
        technologies: ['Vue 2', 'Vuex', 'Vue Router', 'Axios', 'Webpack', 'Element', 'Git', 'TypeScript'],
        challenges: [],
        solutions: [],
        responsibilities: [
          'Responsible for frontend development of the “Songguo Wealth / Dajinsuo” administration system, contributing to platform business modules, feature iterations, and routine maintenance to support operations of the investment and wealth management platform.',
          'To address the many duplicated page structures and interaction patterns in the administration system, abstracted and encapsulated shared components and utilities for the sidebar, top navigation, pagination, search, data import, and file downloads, establishing a reusable frontend development foundation.',
          'Optimized the project’s code organization through componentization, modular design, and shared code reuse, reducing duplicate development and coupling between modules while improving feature extensibility and maintainability.',
          'To meet financial data transmission security requirements, adopted an RSA + AES hybrid encryption scheme: business data is encrypted with AES, and the AES key is encrypted with RSA. This enabled encrypted data transmission between frontend and backend and strengthened the security of sensitive business data.',
          'Continued to contribute to feature improvements and release iterations, delivering quickly in response to business requirements and supporting a two-week iteration cadence and code quality.',
        ],
        results: [
          'Reduced duplicate development through shared components, common utilities, and modular design, shortening overall development time by approximately 20%.',
          'Established a unified set of shared administration components and reusable functionality, lowering the cost of developing new business modules and improving future extensibility and maintenance efficiency.',
          'Implemented RSA + AES hybrid encrypted transmission to meet sensitive data security requirements in financial business scenarios.',
          'Supported ongoing iterations since the project’s first release in May 2018, contributing to dozens of version releases and the continued delivery of platform features and marketing campaigns.',
          'By the end of 2019, sales of the platform’s products had exceeded RMB 5 billion.',
        ],
      },
      {
        category: 'EMPLOYEE SERVICES / H5 AND ADMIN',
        title: 'Cedar University',
        description: 'Cedar University is an activity and training management platform for Xuesong employees, offering event booking, registration, information lookup, and operations management. The system consists of an H5 mobile application embedded in the Xuesong Connect app and a supporting operations administration system, serving employees and operations staff respectively.',
        technologies: ['Vue 2', 'Vuex', 'Vue Router', 'Axios', 'Webpack', 'Element', 'Git', 'Mint UI'],
        challenges: [],
        solutions: [],
        responsibilities: [
          'Led frontend development of the Cedar University registration system, taking responsibility for the feature development and overall implementation of both the H5 mobile application embedded in Xuesong Connect and its supporting operations administration system.',
          'For mobile use, built H5 pages and interactions with Mint UI and used lib-flexible for viewport-based layout adaptation across phones of different screen sizes.',
          'Built administration pages and shared interaction components with Element UI, delivering event management, registration management, and related operations features.',
          'Used componentized and modular design to abstract shared page structures and business interaction logic, reducing duplicate code and improving code reuse and feature iteration efficiency.',
        ],
        results: [
          'Led development of both frontend systems—the H5 mobile application and operations administration system—delivering the complete workflow for employee event booking, registration, and lookup, as well as backend operations management.',
          'Combined Mint UI, Element UI, and lib-flexible to establish a frontend development approach for mobile and desktop administration, improving development efficiency across device types.',
          'Improved overall development efficiency by approximately 25% compared with traditional development through componentization, modularization, and shared functionality, supporting rapid project development and continuous iteration.',
        ],
      },
      {
        category: 'FINANCE / ASSET MANAGEMENT',
        title: 'Asset Management System',
        description: 'The Asset Management System primarily serves Xuesong Trust. It brings together business functions for trust product maintenance, asset settlement management, and asset statistics and analysis, providing a unified platform for the day-to-day management of trust assets, business tracking, and data reporting.',
        technologies: ['Vue 2', 'Vuex', 'Vue Router', 'Axios', 'Webpack', 'Element', 'Git'],
        challenges: [],
        solutions: [],
        responsibilities: [
          'Contributed to frontend development, implementing pages, interactions, and frontend-backend API integration for business modules including trust product maintenance, asset settlement management, and asset statistics and analysis.',
          'Extracted shared components and utilities and organized code using componentized and modular design to reduce duplicate implementation across business modules.',
          'Contributed to implementing an RSA + AES hybrid encryption scheme: AES encrypts business data, while RSA encrypts the AES key, helping secure financial data transmission.',
        ],
        results: [
          'Completed frontend development for assigned business modules, supporting the online processing of trust asset management operations.',
          'Reduced duplicate coding and shortened feature development cycles through shared component extraction and modular development, improving development efficiency.',
          'Reduced duplicate implementation through improved code organization and shared functionality, decreasing the project’s bug count by approximately 15%.',
          'Strengthened the security of frontend-backend business data transmission with RSA + AES hybrid encryption.',
        ],
      },
    ],
    contactTitle: 'Open to working together',
    contactDescription: 'I welcome messages about frontend engineering opportunities and collaboration.',
    contactEmailLabel: 'Email',
    footerQuote: 'There is only one success—to be able to spend your life in your own way.',
    footerBackToTop: 'Back to top',
  },
  zh: {
    pageTitle: '前端工程师作品集 | Frontend Engineer Portfolio',
    description:
      '面向日本企业求职的前端工程师个人作品集，介绍企业业务系统开发经验及 HTML5、CSS3、JavaScript、TypeScript、React、Vue 等技术。',
    skipLink: '跳转到正文',
    homeLabel: '首页',
    navigationLabel: '主导航',
    projectsNav: '项目',
    experienceNav: '工作经历',
    contactNav: '联系方式',
    profileNav: '个人简介',
    focusNav: '技能',
    githubProfileText: '查看 GitHub 主页',
    languageLabel: '选择语言',
    githubLabel: '在新标签页打开 GitHub 主页',
    themeToLight: '切换到浅色主题',
    themeToDark: '切换到深色主题',
    light: '浅色',
    dark: '深色',
    heroTitleFirst: '韦宗佐',
    heroTitleSecond: '前端工程师',
    heroEducationSchool: '北方民族大学',
    heroEducationPeriod: '2013年8月—2017年6月',
    heroEducationDegree: '本科毕业',
    heroSummaryTitle: '职业概况',
    heroSummaryParagraphs: [
      '我拥有约{experience}的前端开发实战经验，以 Vue 2/3、React、TypeScript 为核心技术栈，参与过多种 Web 应用的开发，涵盖企业内部业务系统、合作伙伴门户、金融管理系统以及铁路监控与诊断系统（含大屏可视化）等领域。此外，我擅长利用 ECharts 和 WebSocket 实现实时数据可视化。',
      '我曾在多个项目中担任开发负责人，也曾作为唯一的前端开发人员独立负责整个前端模块；致力于通过组件化和模块化提升开发效率与代码质量。',
      '我能够从产品需求文档出发，理解业务背景与产品逻辑，梳理功能需求和业务流程，并将需求转化为具体的前端实现方案。',
    ],
    experienceTitle: '工作经历',
    experienceRangeLabel: '职业经历',
    experienceProjectsLabel: '主要项目',
    experienceProjectDetailsTooltip: '点击查看详情',
    experienceProjectNoDetailsTooltip: '无关联项目详情',
    experienceProjectDetails: {
      商业销售平台: '商业销售平台（移动端）',
      伙伴工作台: '伙伴工作台',
      意向单: '意向单',
      大数据诊断系统: '大数据诊断系统',
      车载检修终端: '车载检修终端',
      '5G云信号运维诊断系统': '5G云信号运维诊断系统',
      福州地铁智能运维综合平台: '福州地铁智能运维综合平台',
      大金所: '大金所（松果财富）',
      雪松大学: '雪松大学',
      资产管理系统: '资产管理系统',
    },
    workHistory: [
      {
        company: '科之锐有限公司（华为 OD）',
        period: '2023.07–2026.06',
        summary: '主导面向部门内部人员及外部伙伴客户的一站式作业系统前端开发。',
        projects: ['商业销售平台', '合同订单', '意向单', '名片', '伙伴官网', '伙伴工作台'],
      },
      {
        company: '西门子交通技术有限公司',
        period: '2021.01–2022.11',
        summary: '主导铁路相关系统的前端开发。',
        projects: [
          '大数据诊断系统',
          '车载检修终端',
          '5G云信号运维诊断系统',
          '福州地铁智能运维综合平台',
          '实时监控系统',
        ],
      },
      {
        company: '广东粤港澳大湾区硬科技创新研究院',
        period: '2020.11–2021.01',
        summary: '主导以下系统的前端开发。',
        projects: ['卫星测运控系统', '集中运行管理平台'],
      },
      {
        company: '雪松控股',
        period: '2018.04–2020.10',
        summary: '主导集团业务平台和业务系统的前端开发。',
        projects: ['大金所', '雪松大学', '资产管理系统'],
      },
      {
        company: '广州乐特信息科技有限公司',
        period: '2017.02–2018.04',
        summary: '负责 APP 和公司官网的前端开发。',
        projects: ['Lete转运 APP', 'Lete 官网'],
      },
    ],
    profileIndex: '个人简介',
    profileTitleFirst: '关于我',
    profileTitleSecond: '',
    profileDescription:
      '持续使用 Vue、React、JavaScript 和 TypeScript 参与前端开发，经验主要涉及企业级业务系统前端实现、组件开发与前端性能优化。同时关注代码结构、交互稳定性与后续维护成本，并兼顾业务规则变化下的可扩展性。',
    profileHighlights: [
      { title: '工作经验', description: '', dynamicExperience: true },
      { title: '主要框架', description: 'Vue 2 / Vue 3 · React' },
      { title: '开发领域', description: '企业级业务系统' },
      { title: '关注方向', description: '组件设计 · 性能优化' },
    ],
    focusTitle: '技术栈',
    focusAreas: [
      {
        title: 'Web 基础',
        technologies: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript'],
      },
      {
        title: '框架',
        technologies: ['React', 'Vue 3', 'Vue 2', 'Uni-App', 'jQuery'],
      },
      {
        title: '工具与通信',
        technologies: ['Git', 'Vite', 'Webpack', 'Axios', 'WebSocket'],
      },
      {
        title: '组件库与可视化',
        technologies: ['Element', 'Vant', 'Mint UI', 'ECharts', 'Canvas'],
      },
    ],
    projectsTitle: '项目',
    projectsIntro: '展示工作中参与的业务系统与铁路系统。',
    projectRoleLabel: '职责',
    projectNamesLabel: '相关项目',
    projectDetailsLabel: '查看项目详情',
    projectCloseLabel: '关闭',
    projectPauseAutoplayLabel: '暂停自动滚动',
    projectResumeAutoplayLabel: '继续自动滚动',
    projectPreviousLabel: '上一个项目',
    projectNextLabel: '下一个项目',
    projectCounterLabel: '项目',
    projectTechnologiesLabel: '主要使用技术',
    projectResponsibilitiesLabel: '项目职责',
    projectResultsLabel: '项目成果',
    projects: [
      {
        category: '企业业务系统',
        title: '企业业务管理系统',
        description: '面向部门内部人员及外部伙伴客户的一站式作业系统前端开发。',
        role: '主导前端开发。',
        names: ['商业销售平台', '伙伴官网', '伙伴工作台', '名片'],
      },
      {
        category: '铁路 / IoT',
        title: '铁路相关 IoT 系统',
        description: '铁路领域诊断、检修和运维监控系统的前端开发。',
        role: '主导多个系统的前端开发。',
        names: ['大数据诊断系统', '车载检修终端', '5G云信号运维诊断系统', '福州地铁智能运维综合平台', '实时监控系统'],
      },
      {
        category: '订单 / 业务支撑',
        title: '订单及业务支撑系统',
        description: '覆盖合同订单、意向单等业务流程的系统开发。',
        role: '主导负责范围内的前端开发。',
        names: ['合同订单', '意向单', '大金所', '资产管理系统'],
      },
    ],
    projectCases: [
      {
        category: '企业业务系统',
        title: '商业销售平台（移动端）',
        description: '面向部门内部销售人员的一站式移动端商业销售管理平台，基于红版 WeLink 构建，通过 WeLink JS-SDK 集成平台能力，整合案件报备、商机管理、方案草案、商务管理、订单管理、合同管理、合作伙伴拓展等多个业务模块，覆盖销售业务多个环节，为内部人员提供统一的移动办公和业务处理入口。',
        technologies: ['Vue 3', 'Vuex', 'Vue Router', 'Vite', 'Git', 'Vant'],
        challenges: [],
        solutions: [],
        responsibilities: [
          '参与项目整体前端技术方案设计及技术架构讨论，负责所承担业务模块的前端详细设计与开发。',
          '基于 Vue 等前端技术及 WeLink JS-SDK，实现移动端业务功能与企业办公平台能力的集成。',
          '根据业务模块的功能特点，进行组件化和模块化设计，抽象公共业务组件，减少重复开发，提高代码复用性。',
          '针对移动端页面加载性能，采用浏览器缓存、懒加载、异步加载等技术优化资源加载策略。',
          '负责所承担模块的代码结构设计、功能开发及后续维护，保障业务功能的可扩展性和可维护性。',
        ],
        results: [
          '完成所负责业务模块的前端设计与开发，实现业务功能与 WeLink 平台能力的集成。',
          '通过浏览器缓存和按需加载优化，减少重复资源请求，降低页面初次加载时的资源负担，改善移动端访问体验。',
          '通过公共组件抽象和模块化设计，减少重复代码，提高模块复用性，降低后续功能迭代与维护成本。',
        ],
      },
      {
        category: '合作伙伴平台',
        title: '伙伴工作台',
        description: '面向华为合作伙伴的一站式业务支持与管理平台，整合业务机会、合同订单、培训赋能、市场销售支持、项目管理、伙伴关系管理、数据分析、产品及解决方案查询、伙伴社区等多个业务模块，为合作伙伴提供统一的业务服务入口。平台与机会点、订单、草案等外围业务系统进行集成，实现跨系统业务数据交互与流程协同。',
        technologies: ['Vue 3', 'Vuex', 'Vue Router', 'Vite', 'Vant', 'Git'],
        challenges: [],
        solutions: [],
        responsibilities: [
          '参与多个核心业务模块的前端设计与开发，负责模块功能实现、业务交互及公共组件开发。',
          '针对平台业务模块多、业务场景复杂的特点，推进组件化、模块化设计，抽象公共业务组件，优化模块间代码组织与复用方式。',
          '负责机会点、订单、草案等外围系统的前端对接与接口联调，处理跨系统数据交互、接口参数及数据结构适配、业务状态处理和异常反馈，推动相关业务流程衔接。',
          '参与部分业务模块的技术方案讨论与开发协调，对模块实现方案、代码质量及功能交付进行技术把关。',
          '配合业务需求持续迭代，负责所承担模块的新功能开发、现有功能优化及问题排查，支持多个版本持续交付。',
        ],
        results: [
          '复杂业务模块整合：完成多个业务模块的前端开发与集成，梳理不同业务场景下的功能交互及模块间关联关系，支持平台多业务场景的统一承载与持续扩展。',
          '跨系统业务流程协同：推进机会点、订单、草案等外围系统的接口集成与联调，针对不同系统间的数据结构、接口参数及业务状态差异进行适配处理，解决跨系统数据交互与业务流程衔接问题。',
          '系统可维护性与扩展性优化：通过公共组件抽象、模块职责划分及代码结构优化，降低模块间耦合与重复开发，提升代码复用性和后续业务迭代效率。',
          '多版本迭代与交付保障：承担部分模块的开发协调与技术把关，推动技术方案落地、问题排查及功能交付，保障所负责模块按计划完成多个版本迭代上线。',
        ],
      },
      {
        category: '低代码业务系统',
        title: '意向单',
        description: '基于华为自研 AUI 的低代码项目，是正式合作协议签署前的重要业务环节，涵盖合作意向、合作方式、合作条款、财务条款、保密条款、争议解决机制、适用范围及签署方式和日期等内容。',
        technologies: ['AUI', 'Vue 3', 'JavaScript', 'TypeScript'],
        challenges: [],
        solutions: [],
        responsibilities: [
          '负责合作意向、合作方式、合作条款及财务条款等多个业务模块的前端开发，针对不同业务类型下表单结构、字段配置及业务规则的差异，完成相应页面和交互逻辑实现。',
          '基于华为自研 AUI 低代码平台进行业务功能开发，结合 Vue 3、JavaScript、TypeScript 处理复杂业务需求，兼顾低代码开发效率与业务功能的灵活实现。',
          '针对多个业务模块中相似的表单及交互功能，采用统一的实现方式，减少重复开发，降低后续业务调整时的修改成本。',
          '面对项目周期紧、业务需求频繁调整的情况，快速梳理需求影响范围，及时调整相关功能实现，处理开发过程中的问题，保障各模块按计划推进。',
        ],
        results: [
          '完成合作意向、合作方式、合作条款及财务条款等多个业务模块的开发，支持合作前期各类业务信息的录入、维护及管理。',
          '结合 AUI 低代码平台的组件和配置能力完成业务功能开发，减少重复编码，提高开发效率。',
          '通过相似功能的统一实现，减少重复开发，提升代码复用性及后续维护效率。',
          '在项目周期紧、需求调整频繁的情况下，按计划完成负责模块的开发及多轮迭代，保障项目按期交付。',
        ],
      },
      {
        category: '物联网 / 轨道交通大数据诊断系统',
        title: '大数据诊断系统',
        description: '面向铁路信号系统的物联网数据监测与综合分析平台，通过采集车辆、车载设备、轨旁设备及无线通信设备等现场硬件的运行数据，经后端处理后推送至前端，实现设备运行状态监测、列车动态跟踪、故障诊断及维修管理。系统涵盖日常维护管理、大数据分析与预测维修、数据报表、维修知识库、用户留言及系统权限管理等功能。',
        technologies: ['Vue 2', 'Vuex', 'Vue Router', 'Axios', 'Webpack', 'ECharts', 'WebSocket', 'Element', 'Git', 'Canvas'],
        challenges: [],
        solutions: [],
        responsibilities: [
          '主导项目整体前端开发，负责前端功能设计、模块划分及核心业务功能实现，通过组件化、模块化组织代码，支撑多个业务模块的开发与维护。',
          '独立开发基于 Canvas 的列车运行图动态可视化功能，实现轨道线路及列车图形绘制，结合 WebSocket 接收后端推送的列车实时位置数据，动态更新列车在轨道上的运行位置。',
          '对接后端推送的车辆、车载及轨旁设备数据，实现列车运行状态、设备运行信息及紧急告警信息的实时展示，帮助用户直观掌握列车运行情况和设备异常状态。',
          '基于 ECharts 开发多种数据可视化图表，将物联网设备采集的多维度运行及诊断数据转化为图形化信息，方便用户进行设备状态查看和数据分析。',
          '基于 Vuex、Vue Router 组织应用状态与页面路由，结合公共组件及模块复用，优化前端代码结构，降低模块间耦合。',
        ],
        results: [
          '主导完成系统前端开发，实现铁路现场设备数据在前端的实时监测、动态展示及综合分析，支撑车辆管理、设备维护、诊断分析和数据报表等核心业务。',
          '独立实现基于 Canvas 与 WebSocket 的列车运行图动态监控功能，将列车实时位置、运行状态、车载及轨旁设备信息与轨道图形相结合，实现列车运行及紧急异常信息的实时可视化展示。',
          '基于 ECharts 构建多维度数据可视化图表，将复杂的物联网设备诊断数据转化为直观的图形信息，提升设备运行状态及诊断信息的可读性。',
          '通过组件化、模块化及公共功能复用，减少重复开发工作，提高前端开发效率及后续功能迭代维护效率。',
        ],
      },
      {
        category: '物联网 / 轨道交通车载检修终端',
        title: '车载检修终端',
        description: '面向检修人员的 H5 车载检修终端，主要提供列车多项关键参数及设备状态的一键检测与集中核查功能。检修人员可通过终端快速检测钥匙开关、ATO 启动按钮、模式升降按钮、车门模式（AA、AM、MM）、车门锁闭状态、紧急制动回读、冗余状态输出等关键参数，及时发现异常，辅助判断列车运行状态及定位故障。',
        technologies: ['Vue 2', 'Vuex', 'Axios', 'Vue Router', 'Webpack', 'Mint UI', 'Git'],
        challenges: [],
        solutions: [],
        responsibilities: [
          '独立负责车载检修终端全部前端开发工作，包括页面实现、业务交互、接口对接及功能联调，完成检修终端的数字化开发。',
          '基于设备联网及后端数据接口，实现 H5 终端与列车设备的数据交互，支持检修人员通过前端点击「一键检测」，自动获取列车多项关键参数及设备状态，替代传统人工逐项采集数据的方式。',
          '针对”不同线路“在 UI 布局、检测参数及数据接口方面的差异，处理"多线路"页面适配与数据对接难题，保证终端复杂的业务场景。',
          '通过合理的组件化、模块化设计及代码组织，减少重复开发工作，缩短功能开发与迭代周期。',
        ],
        results: [
          '实现车载检修终端数字化，将传统人工采集数据、再进行分析的检修方式，转变为设备联网后通过 H5 终端一键获取检测数据，实现多项列车参数及设备状态的集中检测与展示。',
          '独立完成项目全部前端开发，通过组件化、模块化及代码结构优化，减少重复开发工作，整体前端开发时间大幅缩短。',
          '解决“多线路” UI 布局适配及数据对接问题，满足复杂的检修业务需求。',
          '简化检修人员的数据采集和分析流程，相较传统人工采集分析方式，检修效率提升约 50%。',
        ],
      },
      {
        category: '物联网 / 轨道交通 5G 智能运维监控大屏',
        title: '5G云信号运维诊断系统',
        description: '“5G云信号运维诊断系统”是一个实时状态监听大屏项目，实现了对列车状态、列车轮径误差评估、车载数据下达的监听；以及对车地多承载5G指标（测速、丢包、延时、抖动）、车载5G TAU的实时状况、站点与云信号机房5G信号的监测与展示。',
        technologies: ['Vue 3', 'Vuex', 'Vue Router', 'Vite', 'WebSocket', 'ECharts', 'Git'],
        challenges: [],
        solutions: [],
        responsibilities: [
          '独立负责项目全部前端开发工作，包括页面实现、实时数据对接、图表开发及大屏适配。',
          '基于 WebSocket 接收后端推送的实时数据，结合 ECharts 实现列车运行状态、5G 网络质量指标、车载 TAU 状态及各站点信号情况的动态展示。',
          '针对设计稿尺寸与实际显示屏幕尺寸不一致的问题，设计大屏自适应缩放方案，确保页面内容完整呈现而不产生滚动条。',
          '结合 Vue 3、Vuex 及 Vue Router 组织页面结构与状态管理，完成各监控模块的整合与交互开发。',
        ],
        results: [
          '独立完成项目全部前端开发，实现列车运行状态、车地 5G 网络质量及站点信号等多维度数据的实时可视化监控。',
          '设计并实现基于宽高比例计算的自适应缩放方案，动态计算屏幕与设计稿的宽高比例，取较小值作为统一缩放系数，解决了不同尺寸大屏下的布局适配问题，实现页面全屏展示且无滚动条。',
          '优化大屏页面展示效果，页面通常可在 1 秒内完成展示。',
        ],
      },
      {
        category: '物联网 / 轨道交通综合运维监控大屏',
        title: '福州地铁智能运维综合平台',
        description: '面向福州地铁运维管理场景的大屏监控系统，集中展示列车在线状态、设备模块在线情况、数据下载状态，以及列车故障、轨旁故障、信号故障等统计信息，同时展示运维通知及待办事项处理情况，为管理人员提供地铁系统运行状态和故障情况的综合监控视图。',
        technologies: ['Vue 3', 'Vuex', 'Vue Router', 'WebSocket', 'Vite', 'ECharts', 'Element UI', 'Git'],
        challenges: [],
        solutions: [],
        responsibilities: [
          '独立负责项目全部前端开发工作，包括大屏页面实现、数据接口对接、图表开发及页面适配。',
          '基于 WebSocket 对接后端数据，结合 ECharts 实现列车在线状态、设备模块状态、故障统计及通知待办等信息的动态展示。',
          '针对设计稿尺寸与实际大屏分辨率不一致的问题，设计自适应缩放方案，实现不同尺寸大屏的整体布局适配。',
        ],
        results: [
          '独立完成项目全部前端开发，实现列车运行状态、设备在线情况、故障统计及运维待办信息的集中可视化展示。',
          '通过宽高比例动态计算及整体缩放方案，动态计算屏幕与设计稿的宽高比例，取较小值作为统一缩放系数，解决了不同尺寸大屏的布局适配问题，实现全屏展示且无滚动条。',
          '优化页面加载与渲染表现，页面通常可在 1 秒内完成展示。',
        ],
      },
      {
        category: '金融 / 管理后台',
        title: '大金所（松果财富）',
        description: '「松果财富」原名「大金所」，是雪松控股旗下的投资理财平台。雪松入股大连金融资产交易所后，平台面向雪松上游供应链集团，以及化工、房地产、文旅等产业领域提供融资及投资理财服务。后台管理系统负责平台业务管理、产品运营及相关业务流程支撑。',
        technologies: ['Vue 2', 'Vuex', 'Vue Router', 'Axios', 'Webpack', 'Element', 'Git', 'TypeScript'],
        challenges: [],
        solutions: [],
        responsibilities: [
          '负责「松果财富 / 大金所」后台管理系统前端开发，参与平台业务模块建设、功能迭代及日常维护，支撑投资理财平台的运营管理。',
          '针对后台系统中大量重复的页面结构和交互逻辑，抽象并封装侧边栏、顶部导航、分页、搜索、数据导入、文件下载等公共组件及通用方法，建立可复用的前端开发基础。',
          '通过组件化、模块化设计及公共代码复用，优化项目代码组织方式，减少重复开发，降低模块间耦合，提高功能扩展和后续维护效率。',
          '针对金融业务数据传输的安全要求，采用 RSA + AES 混合加密方案，使用 AES 加密业务数据，并通过 RSA 加密 AES 密钥，实现前后端加密数据传输，增强敏感业务数据传输的安全性。',
          '持续参与项目功能优化和版本迭代，配合业务需求快速交付，保障项目两周一次的迭代节奏及代码质量。',
        ],
        results: [
          '通过公共组件、通用方法及模块化设计，减少重复开发工作，整体开发时间缩短约20%。',
          '建立统一的后台公共组件及功能复用体系，降低新业务模块的开发成本，提高后续功能扩展和维护效率。',
          '落地 RSA + AES 混合加密传输方案，满足金融业务场景下对敏感数据传输安全性的要求。',
          '支撑项目自 2018 年 5 月首次上线后的持续迭代，累计经历数十次版本发布，保障平台业务功能及营销活动的持续开展。',
          '截至 2019 年底，平台产品销售额突破 50 亿元人民币。',
        ],
      },
      {
        category: '企业服务 / H5 与后台',
        title: '雪松大学',
        description: '「雪松大学」是面向雪松内部员工的活动与培训管理平台，提供活动预约、报名、信息查询及运营管理等功能。系统由内嵌于「雪松互联」APP 的 H5 移动端和配套运营管理后台组成，分别面向员工和运营管理人员提供服务。',
        technologies: ['Vue 2', 'Vuex', 'Vue Router', 'Axios', 'Webpack', 'Element', 'Git', 'Mint UI'],
        challenges: [],
        solutions: [],
        responsibilities: [
          '主导「雪松大学」报名系统前端开发，负责内嵌于「雪松互联」APP 的 H5 移动端及配套运营管理后台的功能开发与整体实现。',
          '针对移动端使用场景，采用 Mint UI 构建 H5 页面及交互功能，通过 lib-flexible 实现基于 viewport 的移动端布局适配，兼容不同尺寸的手机屏幕。',
          '运营管理后台采用 Element UI 构建页面及通用交互组件，完成活动管理、报名管理及相关运营功能开发。',
          '通过组件化、模块化设计，抽象公共页面结构及业务交互逻辑，减少重复代码，提高代码复用率和功能迭代效率。',
        ],
        results: [
          '主导完成 H5 移动端及运营管理后台两套前端系统的开发，实现员工活动预约、报名、查询及后台运营管理的完整业务流程。',
          '结合 Mint UI、Element UI 及 lib-flexible，建立适用于移动端和 PC 管理端的前端开发方案，提高不同终端的开发效率。',
          '通过组件化、模块化及公共功能复用，相较传统开发方式，整体开发效率提升约 25%，支持项目快速开发和持续迭代。',
        ],
      },
      {
        category: '金融 / 资产管理',
        title: '资产管理系统',
        description: '资产管理系统主要服务于雪松信托，涵盖信托产品维护、资产交割管理、资产统计分析等业务功能，为信托资产的日常管理、业务跟踪及数据统计提供统一的管理平台。',
        technologies: ['Vue 2', 'Vuex', 'Vue Router', 'Axios', 'Webpack', 'Element', 'Git'],
        challenges: [],
        solutions: [],
        responsibilities: [
          '参与项目的前端开发，负责信托产品维护、资产交割管理、资产统计分析等业务模块的页面开发、交互实现及前后端接口对接。',
          '抽取通用组件及公共方法，采用组件化、模块化方式组织代码，减少业务模块之间的重复实现。',
          '参与实现 RSA + AES 混合加密方案，通过 AES 加密业务数据、RSA 加密 AES 密钥，保障金融业务数据传输安全。',
        ],
        results: [
          '完成所负责业务模块的前端开发，支持信托资产管理相关业务的线上化处理。',
          '通过通用组件抽取及模块化开发，减少重复编码，缩短功能开发周期，提升开发效率。',
          '通过优化代码组织及公共功能复用，减少重复实现，项目 Bug 数量减少约 15%。',
          '通过 RSA + AES 混合加密机制，增强前后端业务数据传输的安全性。',
        ],
      },
    ],
    contactTitle: '期待有机会一起工作',
    contactDescription: '欢迎就前端工程师岗位或合作机会与我联系。',
    contactEmailLabel: '发送邮件',
    footerQuote: '世上只有一種成功，就是能用自己喜歡的方式過一生。',
    footerBackToTop: '返回页面顶部',
  },
}
