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
        technologies: ['Vue 3', 'Vuex', 'Vue Router', 'Vite', 'Git', 'Vant'],
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
        challenges: ['正式契約前に多様な協業条件・財務条件を一元管理する必要があり、業務モジュールも多岐にわたっていました。', '短い開発期間の中で、納期とコードの一貫性を両立する必要がありました。'],
        solutions: ['AUIローコードプラットフォームを利用し、複数の業務モジュールを開発しました。', 'ローコードの活用により、重複実装を抑え、可視性と再利用性を高めました。', '厳しいスケジュールに合わせて迅速に開発・改修し、納期を守りました。'],
        responsibilities: ['複数のプロジェクトモジュールの機能開発に参加しました。', 'AUIローコードを用いて実装し、コーディング量の削減と可視性の向上に取り組みました。', '緊急度の高い改修にも迅速に対応し、納期を守りました。'],
        results: ['ローコードの活用により、コードの一貫性・再利用性・保守性を高めました。', '厳しいスケジュールの中で納期どおりにリリースしました。'],
      },
      {
        category: '鉄道 / データ可視化',
        title: 'ビッグデータ診断システム',
        description: '車両データ、車上・地上設備および無線設備の日常保守、ビッグデータ分析と予防保全、帳票、信号システムの保守知識、ユーザーからの問い合わせ、システム・権限管理を統合したデータ分析システムです。',
        technologies: ['Vue 2', 'Vuex', 'Vue Router', 'Axios', 'Webpack', 'ECharts', 'WebSocket', 'Element', 'Git', 'Canvas'],
        challenges: ['車両、車上、地上、無線設備の保守データと管理機能を統合する必要がありました。', '診断データを分かりやすく可視化し、クライアントとサーバー間で効率的にデータを交換する必要がありました。'],
        solutions: ['フロントエンド開発を主導し、コンポーネント化・モジュール化を進めました。', 'EChartsでデータを可視化し、WebSocketでクライアントとサーバー間のデータ交換を実装しました。'],
        responsibilities: ['フロントエンド開発を主導し、保守しやすいコンポーネント・モジュール構成を整えました。', 'EChartsを用いたデータ可視化を実装しました。', 'WebSocketによるクライアント・サーバー間のデータ交換を実装しました。'],
        results: ['コンポーネント化・モジュール化により、開発期間を約30％短縮しました。', '診断データの可視性とリアルタイム通信の効率を高めました。'],
      },
      {
        category: '鉄道 / H5端末',
        title: '車載メンテナンス端末',
        description: '保守担当者が列車の各種パラメーターをワンタップで点検できるH5端末です。キースイッチ、ATO起動、モード切替、ドアモード・ドアロック、非常ブレーキの応答、冗長系の状態などを確認し、問題の特定を支援します。',
        technologies: ['Vue 2', 'Vuex', 'Axios', 'Vue Router', 'Webpack', 'Mint UI', 'Git'],
        challenges: ['多くの列車パラメーターを迅速に点検できる画面と、複数路線に対応したレイアウト・データ連携が必要でした。'],
        solutions: ['コンポーネント化・モジュール化を取り入れ、フロントエンドを単独で開発しました。', '複数路線向けUIのレイアウトとデータ連携の課題に対応し、点検業務のデジタル化を進めました。'],
        responsibilities: ['フロントエンド全体を単独で開発しました。', 'コンポーネント化・モジュール化とコード構成の整理により、端末のデジタル化を推進しました。', '複数路線に対応するUIレイアウトとデータ連携を実現しました。'],
        results: ['開発期間を約20％短縮しました。', '手作業によるデータ収集・分析と比較して、点検効率を約50％向上させました。'],
      },
      {
        category: '鉄道 / 5G運用監視',
        title: '5Gクラウド信号運用・保守診断システム',
        description: '列車状態、車輪径誤差の評価、車上データの送信状況に加え、列車・地上間の5G指標（速度、パケット損失、遅延、ジッター）、車上5G TAUの状態、駅およびクラウド信号機器室の5G信号をリアルタイムに監視する大画面システムです。',
        technologies: ['Vue 3', 'Vuex', 'Vue Router', 'Vite', 'WebSocket', 'ECharts', 'Git'],
        challenges: ['列車状態、5Gネットワーク指標、複数駅の信号状態を大画面にリアルタイム表示する必要がありました。', '画面サイズの異なる大画面に合わせ、表示のはみ出しやスクロールを防ぐ必要がありました。'],
        solutions: ['フロントエンド全体を単独で開発し、各種指標の監視・表示を実装しました。', '画面と設計サイズの縦横比を比較し、小さい方の比率を縮尺として異なる大画面に適応させました。'],
        responsibilities: ['フロントエンド開発全体を単独で担当しました。', '画面と設計サイズから縮尺を算出し、異なる大画面でもスクロールなしで全画面表示できるようにしました。', '各指標を監視・表示し、管理者による状況把握と障害特定を支援しました。'],
        results: ['異なるサイズの大画面でも、スクロールなしで全画面表示できるようにしました。', '通常、1秒以内に画面を表示しました。'],
      },
      {
        category: '鉄道 / 運用監視',
        title: '福州地下鉄スマート運用保守統合プラットフォーム',
        description: '列車・モジュールのオンライン状態、データダウンロード、列車・地上設備・信号の障害統計、通知や未処理タスクの状況を表示する運用監視システムです。',
        technologies: ['Vue 3', 'Vuex', 'Vue Router', 'WebSocket', 'Vite', 'ECharts', 'Git', 'Element'],
        challenges: ['オンライン状態、データダウンロード、列車・地上設備・信号の障害、未処理タスクなど多様な情報を統合する必要がありました。', '異なる大画面サイズに適応し、全情報を表示する必要がありました。'],
        solutions: ['フロントエンドを単独で開発し、画面と設計サイズの比率を動的に算出して自動縮尺する仕組みを実装しました。'],
        responsibilities: ['フロントエンド開発全体を単独で担当しました。', '画面と設計サイズから縮尺を算出し、異なる大画面でもスクロールなしで全画面表示できるようにしました。'],
        results: ['異なるサイズの大画面に対応し、スクロールのない全画面表示を実現しました。', '通常、1秒以内に画面を表示しました。'],
      },
      {
        category: '金融 / 管理システム',
        title: '大金所（松果財富）',
        description: '「松果財富」は雪松による大連金融資産取引所への出資後、「大金所」に名称変更した投資・資産運用プラットフォームです。雪松の上流サプライチェーンに加え、化学、不動産、文化・観光などの事業に融資サービスを提供しています。',
        technologies: ['Vue 2', 'Vuex', 'Vue Router', 'Axios', 'Webpack', 'Element', 'Git', 'TypeScript'],
        challenges: ['投資プラットフォームの管理画面には多数の管理ページがあり、重複開発と保守コストの抑制が必要でした。', '金融情報の安全な通信を確保しながら、継続的な業務改善と短いリリースサイクルに対応する必要がありました。'],
        solutions: ['サイドバー、ヘッダー、ページネーション、検索、インポート、ダウンロードなどの共通部品・ユーティリティを抽象化しました。', 'フロントエンド・バックエンド間の通信に非対称暗号化を採用し、継続的な改善によって2週間ごとのリリースを支えました。'],
        responsibilities: ['投資プラットフォームの総合管理システムを開発しました。', 'サイドバー、ヘッダー、ページネーション、検索、インポート、ダウンロードなどの共通部品・ユーティリティを整備しました。', '金融関連情報の通信に非対称暗号化を導入しました。', '継続的な改善を通じて、短いサイクルのリリースを支援しました。'],
        results: ['共通部品・機能の抽象化により、開発期間を約30％、バグを約15％削減しました。', '2018年5月の初回リリース以降、数十回のリリースを重ね、販売促進活動を支援しました。', '2019年末までに、製品販売額が50億元を超えました。'],
      },
      {
        category: '社内サービス / H5・管理画面',
        title: '雪松大学',
        description: '雪松の従業員向けに、イベントの予約・申込・検索・管理や研修参加を支援するシステムです。「雪松互聯」アプリに組み込まれたH5アプリと運営管理画面で構成されています。',
        technologies: ['Vue 2', 'Vuex', 'Vue Router', 'Axios', 'Webpack', 'Element', 'Git', 'Mint UI'],
        challenges: ['アプリ内H5の申込フローと運営管理画面の両方に対応する必要がありました。', 'モバイルのビューポート適応と迅速な反復開発が重要でした。'],
        solutions: ['申込システムの開発を主導し、H5にはMint UIとlib-flexible、管理画面にはElementを採用しました。', 'コンポーネント化・モジュール化によってコードを整理し、迅速な開発と反復を可能にしました。'],
        responsibilities: ['モバイルH5と運営管理画面を含む申込システムの開発を主導しました。', 'H5ではMint UIとlib-flexibleでモバイル表示に対応し、管理画面ではElementを利用しました。', 'コンポーネント化・モジュール化により、実行性能と開発効率の改善に取り組みました。'],
        results: ['従来の開発方法と比較して、開発効率を約25％向上させました。', 'H5と運営管理画面の迅速な開発・反復を実現しました。'],
      },
      {
        category: '金融 / 資産管理',
        title: '資産管理システム',
        description: '雪松信託向けの資産プラットフォームです。信託商品の保守、資産引き渡し管理、資産分析を支援し、資産管理の透明性と業務効率の向上を目指します。',
        technologies: ['Vue 2', 'Vuex', 'Vue Router', 'Axios', 'Webpack', 'Element', 'Git'],
        challenges: ['信託商品の保守、資産引き渡し、統計分析など複数の業務機能に対応する必要がありました。', '金融関連情報を安全に送受信する必要がありました。'],
        solutions: ['開発を主導し、コンポーネント化・モジュール化とコード構成の整理によって開発効率を高めました。', 'フロントエンド・バックエンド間のデータ通信に非対称暗号化を採用しました。'],
        responsibilities: ['プロジェクト開発を主導しました。', 'コンポーネント化・モジュール化とコード構成の整理により、開発効率の向上に取り組みました。', '金融関連情報の通信を保護するため、非対称暗号化を導入しました。'],
        results: ['再利用可能なコンポーネントとモジュールにより、開発期間を短縮し、開発効率を高めました。', 'バグを約15％削減しました。'],
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
        technologies: ['Vue 3', 'Vuex', 'Vue Router', 'Vite', 'Git', 'Vant'],
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
        challenges: ['The pre-agreement process requires managing many cooperation and financial terms across multiple business modules.', 'The project required rapid iteration while maintaining consistency and delivery quality.'],
        solutions: ['Developed multiple functional modules using the AUI low-code platform.', 'Used low-code capabilities to reduce repetitive coding, improve visual configuration, and increase reuse.', 'Iterated quickly under an urgent schedule to support on-time delivery.'],
        responsibilities: ['Developed features across multiple project modules.', 'Implemented functionality with AUI low-code to reduce coding effort and improve visualization.', 'Delivered rapid iterations to meet the project schedule.'],
        results: ['Improved code consistency, reuse, and maintainability through low-code capabilities.', 'Supported on-time delivery under a tight schedule.'],
      },
      {
        category: 'RAILWAY / DATA VISUALIZATION',
        title: 'Big Data Diagnostic System',
        description: 'A data analysis system integrating vehicle data, onboard, trackside, and wireless maintenance, predictive maintenance, reporting, signal-system maintenance knowledge, user feedback, system administration, and access control.',
        technologies: ['Vue 2', 'Vuex', 'Vue Router', 'Axios', 'Webpack', 'ECharts', 'WebSocket', 'Element', 'Git', 'Canvas'],
        challenges: ['The system needed to bring together vehicle, onboard, trackside, and wireless maintenance data and workflows.', 'Diagnostic data needed clear visualization and efficient client-server data exchange.'],
        solutions: ['Led frontend development with a componentized and modular structure.', 'Used ECharts to present data more intuitively and WebSocket to simplify client-server data exchange.'],
        responsibilities: ['Led the project’s frontend development and organized the application into maintainable components and modules.', 'Built data visualizations with ECharts.', 'Implemented client-server data exchange with WebSocket.'],
        results: ['Reduced development time by approximately 30%.', 'Made diagnostic data easier to understand and data exchange more efficient.'],
      },
      {
        category: 'RAILWAY / H5 TERMINAL',
        title: 'Onboard Maintenance Terminal',
        description: 'An H5 terminal that helps maintenance personnel check train parameters with one action, including key switches, ATO controls, mode buttons, door modes and locks, emergency brake feedback, and redundant status outputs, helping them locate issues.',
        technologies: ['Vue 2', 'Vuex', 'Axios', 'Vue Router', 'Webpack', 'Mint UI', 'Git'],
        challenges: ['Maintenance personnel need to check many train parameters quickly, while layouts and data integration must support multiple railway lines.'],
        solutions: ['Independently developed the frontend using a componentized and modular structure.', 'Resolved layout and data integration challenges for the multi-line UI and digitized inspection workflows.'],
        responsibilities: ['Developed the entire frontend independently.', 'Used componentization, modularization, and structured code to accelerate terminal digitization.', 'Solved multi-line UI layout and data integration challenges.'],
        results: ['Reduced development time by approximately 20%.', 'Improved inspection efficiency by approximately 50% compared with collecting and analyzing data manually.'],
      },
      {
        category: 'RAILWAY / 5G OPERATIONS DISPLAY',
        title: '5G Cloud Signal Operations and Maintenance Diagnosis System',
        description: 'A real-time monitoring display for train status, wheel-diameter error assessment, onboard data delivery, train-to-ground 5G indicators (speed, packet loss, latency, and jitter), onboard 5G TAU status, and 5G signals at stations and the cloud signal control room.',
        technologies: ['Vue 3', 'Vuex', 'Vue Router', 'Vite', 'WebSocket', 'ECharts', 'Git'],
        challenges: ['The display needed to present train status, 5G network indicators, and signal conditions across stations in real time.', 'The layout had to fit different large-screen sizes without overflow or scrollbars.'],
        solutions: ['Independently completed the frontend and monitored and displayed real-time indicators.', 'Compared screen dimensions with the design dimensions and used the smaller scale ratio to adapt the layout to different screens.'],
        responsibilities: ['Completed all frontend development independently.', 'Calculated a scale factor from screen and design dimensions to fit different large screens without scrolling.', 'Displayed monitored indicators to help managers understand system status and locate faults.'],
        results: ['Displayed the interface full-screen on different large displays without scrollbars.', 'Typically rendered within one second.'],
      },
      {
        category: 'RAILWAY / OPERATIONS DISPLAY',
        title: 'Fuzhou Metro Intelligent Operations and Maintenance Integrated Platform',
        description: 'A large-screen operations display showing train and module online status, data downloads, train, trackside, and signal fault statistics, and pending notifications and tasks.',
        technologies: ['Vue 3', 'Vuex', 'Vue Router', 'WebSocket', 'Vite', 'ECharts', 'Git', 'Element'],
        challenges: ['The display combines online status, downloads, train and trackside faults, signal faults, and pending tasks.', 'It needed to fit different screen sizes and remain fully visible.'],
        solutions: ['Independently completed the frontend and used dynamic screen-to-design dimension calculations to scale the display for different screens.'],
        responsibilities: ['Completed all frontend development independently.', 'Calculated and applied a screen scale factor to provide a full-screen layout without scrollbars across different display sizes.'],
        results: ['Supported full-screen display across different large-screen sizes without scrollbars.', 'Typically rendered within one second.'],
      },
      {
        category: 'FINANCE / ADMINISTRATION',
        title: 'Dajinsuo (Songguo Wealth)',
        description: 'Originally named Songguo Wealth, Dajinsuo followed Xuesong’s investment in the Dalian Asset Exchange. The investment and wealth management platform provides financing and related services to Xuesong’s upstream supply chain and its chemical, real estate, and cultural tourism businesses.',
        technologies: ['Vue 2', 'Vuex', 'Vue Router', 'Axios', 'Webpack', 'Element', 'Git', 'TypeScript'],
        challenges: ['The investment platform’s administration system had many management screens, making reuse and maintenance important.', 'Financial information needed secure transmission while the product continued to support frequent business iterations.'],
        solutions: ['Abstracted reusable components and utilities for the sidebar, top bar, pagination, search, import, and download.', 'Used asymmetric encryption for frontend-backend data transmission and continuously optimized the system for two-week release cycles.'],
        responsibilities: ['Developed the investment platform’s comprehensive administration system.', 'Built reusable components and utilities for common administration workflows.', 'Implemented asymmetric encryption for financial data transmission.', 'Continuously optimized the system to support rapid iterations.'],
        results: ['Reduced development time by approximately 30% and bugs by approximately 15%.', 'Supported dozens of releases after the first launch in May 2018 and provided support for business marketing activities.', 'Product sales exceeded RMB 5 billion by the end of 2019.'],
      },
      {
        category: 'EMPLOYEE SERVICES / H5 AND ADMIN',
        title: 'Cedar University',
        description: 'A system for Xuesong employees to book, register for, search, and manage activities and training. It includes an H5 application embedded in Xuesong Connect and an operations administration system.',
        technologies: ['Vue 2', 'Vuex', 'Vue Router', 'Axios', 'Webpack', 'Element', 'Git', 'Mint UI'],
        challenges: ['The system needed to support both an in-app H5 registration flow and an operations administration system.', 'Mobile viewport adaptation and rapid iteration were key implementation needs.'],
        solutions: ['Led development of the registration system, using Mint UI and lib-flexible for the H5 application and Element for the administration system.', 'Used componentization and modularization to improve runtime performance and support rapid development and iteration.'],
        responsibilities: ['Led development of the registration system across the mobile H5 application and its administration system.', 'Applied Mint UI and lib-flexible for mobile viewport adaptation and Element for the operations backend.', 'Improved code reuse and runtime performance through componentization and modularization.'],
        results: ['Improved development efficiency by approximately 25% compared with the traditional development approach.', 'Enabled rapid development and iteration across the H5 application and administration system.'],
      },
      {
        category: 'FINANCE / ASSET MANAGEMENT',
        title: 'Asset Management System',
        description: 'An asset platform for Xuesong Trust that supports trust product maintenance, asset transfer management, and asset analysis, with the goal of improving asset management transparency and work efficiency.',
        technologies: ['Vue 2', 'Vuex', 'Vue Router', 'Axios', 'Webpack', 'Element', 'Git'],
        challenges: ['The platform needed to support trust product maintenance, asset transfers, and statistical analysis.', 'Financial information transmission needed to be secure.'],
        solutions: ['Led development and improved delivery efficiency through componentization, modularization, and structured code.', 'Used asymmetric encryption for frontend-backend data transmission.'],
        responsibilities: ['Led the project’s development.', 'Used componentization, modularization, and code organization to improve development efficiency.', 'Implemented asymmetric encryption to secure financial data transmission.'],
        results: ['Reduced development time and improved development efficiency through reusable components and modules.', 'Reduced bugs by approximately 15%.'],
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
        technologies: ['Vue 3', 'Vuex', 'Vue Router', 'Vite', 'Git', 'Vant'],
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
        challenges: ['正式合作协议签署前需要集中管理多类合作与财务条款，业务模块较多。', '项目迭代时间紧，需要兼顾交付进度与代码一致性。'],
        solutions: ['参与多个业务模块开发，基于 AUI 低代码平台实现功能。', '利用低代码能力减少重复编码、提升可视化程度和复用性，并快速迭代保障按时交付。'],
        responsibilities: ['参与多个业务模块的功能开发。', '基于 AUI 低代码平台实现功能，减少重复编码并提升可视化程度。', '在紧急迭代中快速开发，保障项目按时交付。'],
        results: ['借助低代码能力提升代码一致性、复用性及后续维护效率。', '按时完成紧急迭代交付。'],
      },
      {
        category: '铁路 / 数据可视化',
        title: '大数据诊断系统',
        description: '综合数据分析系统，涵盖车辆数据、车载与轨旁及无线日常维护、大数据分析与预测维修、报表、信号系统维修知识、用户留言、系统及权限管理。',
        technologies: ['Vue 2', 'Vuex', 'Vue Router', 'Axios', 'Webpack', 'ECharts', 'WebSocket', 'Element', 'Git', 'Canvas'],
        challenges: ['系统需要整合车辆、车载、轨旁和无线维护等多类数据及管理功能。', '诊断数据需要直观呈现，并支持客户端与服务端之间的数据交换。'],
        solutions: ['主导前端开发，合理进行组件化、模块化和代码组织。', '使用 ECharts 展示数据，并使用 WebSocket 实现客户端与服务端的数据交换。'],
        responsibilities: ['主导项目开发，通过合理的组件化、模块化和代码组织推进系统建设。', '使用 ECharts 构建数据可视化展示，使诊断数据更直观。', '使用 WebSocket 实现客户端与服务端实时数据交换。'],
        results: ['通过组件化及模块化优化，开发时间减少约 30%。', '实时数据展示与传输更直观、高效。'],
      },
      {
        category: '铁路 / H5 终端',
        title: '车载检修终端',
        description: '面向检修人员的 H5 终端，可一键检测列车参数状态，包括钥匙开关、ATO 启动、模式升降、车门模式及锁闭、紧急制动回读和冗余状态输出等，辅助快速定位问题。',
        technologies: ['Vue 2', 'Vuex', 'Axios', 'Vue Router', 'Webpack', 'Mint UI', 'Git'],
        challenges: ['检修人员需要快速检查多项列车参数，且界面布局和数据对接要适配多条线路。'],
        solutions: ['独立完成前端开发，通过组件化、模块化推进检修终端数字化。', '处理多线路 UI 布局与数据对接，支持一键检测并辅助定位问题。'],
        responsibilities: ['独立负责前端部分的完整开发。', '通过组件化、模块化和代码组织加快检修终端数字化。', '解决多线路 UI 布局和数据对接问题。'],
        results: ['开发时间减少约 20%。', '相较人工采集后分析，检修效率提升约 50%。'],
      },
      {
        category: '铁路 / 5G 大屏',
        title: '5G云信号运维诊断系统',
        description: '实时状态监测大屏，展示列车状态、车轮直径误差评估和车载数据下达，并监测车地多承载 5G 指标（测速、丢包、延时、抖动）、车载 5G TAU 状况及站点和云信号机房的 5G 信号。',
        technologies: ['Vue 3', 'Vuex', 'Vue Router', 'Vite', 'WebSocket', 'ECharts', 'Git'],
        challenges: ['需要在大屏上实时呈现列车状态、5G 网络指标和多个站点的信号情况。', '设计稿尺寸与实际大屏尺寸不同，需要避免展示溢出和滚动条。'],
        solutions: ['独立完成项目全部前端开发，并监听和展示各项实时指标。', '动态比较屏幕与设计稿的宽高比例，取较小值作为缩放比例以适配不同大屏。'],
        responsibilities: ['独立完成项目全部前端开发。', '动态计算屏幕与设计稿宽高比例，取较小值作为缩放比例，实现不同大屏下自适应全屏展示。', '监听并展示各项实时指标，支持管理人员掌握系统状态及定位故障。'],
        results: ['不同尺寸大屏均可全屏展示且不产生滚动条。', '通常可在 1 秒内完成展示。'],
      },
      {
        category: '铁路 / 运维大屏',
        title: '福州地铁智能运维综合平台',
        description: '展示列车在线、模块在线、数据下载、列车与轨旁及信号故障统计，以及通知待办处理情况的运维大屏。',
        technologies: ['Vue 3', 'Vuex', 'Vue Router', 'WebSocket', 'Vite', 'ECharts', 'Git', 'Element'],
        challenges: ['运维信息涵盖在线状态、数据下载、列车及轨旁和信号故障、通知待办等多类内容。', '大屏需要适配不同尺寸并保持完整展示。'],
        solutions: ['独立完成前端开发，使用动态宽高比例计算和自动缩放适配不同尺寸大屏。'],
        responsibilities: ['独立完成项目全部前端开发。', '动态计算屏幕与设计稿宽高比例并自动缩放，适配不同尺寸大屏，实现全屏无滚动条展示。'],
        results: ['适配不同尺寸大屏，保持全屏展示且无滚动条。', '通常可在 1 秒内完成展示。'],
      },
      {
        category: '金融 / 管理后台',
        title: '大金所（松果财富）',
        description: '“松果财富”在雪松入股大连资产交易所后更名为“大金所”，为雪松上游供应链及化工、房地产、文旅等行业提供融资等服务。项目为其投资平台综合管理后台。',
        technologies: ['Vue 2', 'Vuex', 'Vue Router', 'Axios', 'Webpack', 'Element', 'Git', 'TypeScript'],
        challenges: ['投资平台后台涉及多类管理页面，需要控制重复开发和维护成本。', '金融相关信息传输需要关注安全，并持续支持快速业务迭代。'],
        solutions: ['抽象侧边栏、顶部、分页、搜索、导入、下载等组件与通用方法。', '采用前后端非对称加密传输，并持续优化以支持每两周一次的迭代。'],
        responsibilities: ['负责投资平台综合管理后台开发。', '抽象侧边栏、顶部、分页、搜索、导入、下载及通用方法等组件与工具。', '采用前后端非对称加密传输，保障金融相关信息传输安全。', '持续优化并支持每两周一次的快速迭代。'],
        results: ['组件与通用能力抽象使开发时间减少约 30%，Bug 减少约 15%。', '自 2018 年 5 月首次上线后经历数十次发布，支持业务营销活动。', '截至 2019 年底，产品销售额突破 50 亿元。'],
      },
      {
        category: '企业服务 / H5 与后台',
        title: '雪松大学',
        description: '为雪松内部员工提供活动预约、报名、查询、管理及培训参与能力，包括嵌入“雪松互联”App 的 H5 程序和运营管理后台。',
        technologies: ['Vue 2', 'Vuex', 'Vue Router', 'Axios', 'Webpack', 'Element', 'Git', 'Mint UI'],
        challenges: ['系统需要同时支持 App 内嵌 H5 报名流程和运营管理后台。', '移动端视口适配与快速迭代是开发中的重点。'],
        solutions: ['主导报名系统开发，H5 使用 Mint UI 和 lib-flexible 适配视口，后台使用 Element。', '通过组件化和模块化抽象代码，支持快速开发与迭代。'],
        responsibilities: ['主导报名系统开发，覆盖移动 H5 与对应运营后台。', 'H5 使用 Mint UI 和 lib-flexible 适配移动端视口，后台使用 Element。', '通过组件化和模块化抽象代码，优化运行速度并支持快速迭代。'],
        results: ['相较传统开发模式，开发效率提升约 25%。', '支持 H5 与运营后台快速开发和迭代。'],
      },
      {
        category: '金融 / 资产管理',
        title: '资产管理系统',
        description: '面向雪松信托的资产平台，支持信托产品维护、资产交割管理和资产统计分析，帮助提升资产管理透明度与工作效率。',
        technologies: ['Vue 2', 'Vuex', 'Vue Router', 'Axios', 'Webpack', 'Element', 'Git'],
        challenges: ['系统需要支持信托产品维护、资产交割管理和资产统计分析等多项业务。', '金融相关信息传输需要保障安全。'],
        solutions: ['主导项目开发，通过组件化、模块化和代码组织提升开发效率。', '采用非对称加密实现前后端数据传输。'],
        responsibilities: ['主导项目开发，通过组件化、模块化和代码组织提升开发效率。', '采用非对称加密实现前后端数据传输，保障金融相关信息传输安全。'],
        results: ['通过组件化及模块化优化，减少开发时间并提升开发效率。', 'Bug 减少约 15%。'],
      },
    ],
    contactTitle: '期待有机会一起工作',
    contactDescription: '欢迎就前端工程师岗位或合作机会与我联系。',
    contactEmailLabel: '发送邮件',
    footerQuote: '世上只有一種成功，就是能用自己喜歡的方式過一生。',
    footerBackToTop: '返回页面顶部',
  },
}
