export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-8 p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-6">しばよこについて</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            「ただの趣味」だった僕のプログラミングのはじまり
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              僕がプログラミングを始めたのは、大学1年生のときでした。
              <br />
              右も左もわからないまま、コードを眺めては何度もつまずいていました。
              <br />
              そんな中、兄が自作のWebページを見せてくれたことが、すべての始まりでした。
              <br />
              「これ、全部自分で書いてるんだよ」
              <br />
              そう言われて見たHTMLやJavaScriptのコード。画面上で色が変わり、ボタンが動くのを見たとき、僕は素直に「かっこいい」と思いました。
              <br />
              それからは夢中でコードを学び、気がつけばWebエンジニアとして活動するように。
              <br />
              でも、大学3年生になって周りを見たとき、こんなことを感じました。
            </p>
            <blockquote className="border-l-4 border-primary pl-4 italic">
              「自分は"きっかけ"があったから楽しくなれた。じゃあ、周りの人はどうなんだろう？」
            </blockquote>
            <p>
              実際、周りの学生たちはプログラミングを難しそうなものだと感じていて、楽しむ前に挫折してしまっている人も多かったんです。
              <br />
              その時、僕は決めました。
              <br />
              「今度は、自分が"きっかけを与える側"になろう」
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            TechNovaの誕生：エンジニアが学び合う場をつくる
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              最初に立ち上げたのが「TechNova」というエンジニア向けのサークルです。
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Web開発を実践形式で学ぶ</li>
              <li>一緒に手を動かしてアウトプットを出す</li>
              <li>プログラミングの楽しさを体感する</li>
            </ul>
            <p>
              そんな仲間たちが少しずつ集まり、エンジニアとしての学びのコミュニティが形になっていきました。
              <br />
              でも次第にこう感じるようになります。
            </p>
            <blockquote className="border-l-4 border-primary pl-4 italic">
              「コードが書けるだけでは、プロダクトは生まれない。
              <br />
              デザイン、ユーザー体験、見た目の美しさも必要だ」
            </blockquote>
            <p>
              そんなとき、同じように悩んでいたのがデザインを学ぶ学生たちでした。
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            デザイナーの仲間たちとの出会い、そして融合へ
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              芝浦工大内のデザイン志望の学生たちと話す機会がありました。驚くことに、彼らもまた、僕たちと同じように自分たちの居場所を作ろうと動き出している真っ最中だったのです。彼らも共通の課題を感じていました。
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>美大のような制作環境がない</li>
              <li>先輩と後輩のつながりが薄い</li>
              <li>就活の早期化についていけない</li>
            </ul>
            <p>
              デザインを学び、表現したいという熱意を持ちながらも、それを実現する環境や機会が少ないという悩みを抱えていました。そして、まさに「デザイン系のサークルを立ち上げよう」と具体的に動き出す寸前だったんです。
              <br />
              話していくうちに、僕たちの想いは自然と重なっていきました。「エンジニアだけで完結するものづくりには限界がある」と感じていた僕たちと、「デザインのアウトプットの場が欲しい、居場所が欲しい」と感じていた彼ら。互いの課題を共有し、「じゃあ、一緒にやってみようよ」この一言が、TechNovaにデザイン領域が加わり、新たな姿として生まれ変わる大きなきっかけとなりました。
            </p>
            <p className="text-lg font-medium text-foreground">
              それが　しばよこ　です。
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">しばよこに込めた想い</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              「しばよこ」という名前の由来は、"横丁"にあります。
              <br />
              横丁は、異なる人が偶然出会い、語り合い、ときに文化が生まれる場所。
              <br />
              私たちはそんな出会いと偶発のある"場"を、芝浦工大の中につくろうとしています。
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            ミッション・ビジョン・バリュー
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Mission</h3>
              <p className="text-muted-foreground">
                人から人へ繋がる、新たな未来を生み出す
              </p>
            </div>
            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Vision</h3>
              <p className="text-muted-foreground">
                つながりと共創で未来を創る、芝浦工業大学の象徴的なサークルへ
              </p>
            </div>
            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Value</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>
                  <strong>挑戦しよう：</strong>まずはやってみる
                </li>
                <li>
                  <strong>楽しもう：</strong>真面目も遊び心も大事
                </li>
                <li>
                  <strong>共創しよう：</strong>一人じゃできないことを、一緒に
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">実際の活動内容</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🎓</span>
              <div>
                <strong>勉強会：</strong>
                <span className="text-muted-foreground">
                  Figma, Illustrator, React, Arduino, Web制作 などを学ぶ会を開催
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🧑‍🤝‍🧑</span>
              <div>
                <strong>交流会：</strong>
                <span className="text-muted-foreground">
                  先輩後輩、学科横断で相談・雑談できる場を用意
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🏕</span>
              <div>
                <strong>ハッカソン・合宿：</strong>
                <span className="text-muted-foreground">
                  春・夏に学内最大ハッカソンを実施予定
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">メンバー紹介</h2>
          <div className="space-y-6">
            <div className="bg-muted/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                高田 颯真（代表・エンジニア代表）
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                しばよこ創設者・TechNova創設者。Webエンジニアとしての知識を活かし、学内に"学び合いの場"を作ることに情熱を注ぐ。多岐にわたる技術領域への探究心と、仲間と共に成長する環境を築くリーダーシップで、しばよこの活動を牽引している。
              </p>
            </div>
            <div className="bg-muted/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                亀田 羽流（デザイナー代表）
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                しばよこ創設者。デザイン思考に強みを持ち、FigmaやPhotoshopを駆使するクリエイター。デザイナーの学びと交流の「誰もが自由に表現し、刺激し合える居場所」を作りたいと考えていた。デザインの力で共創の価値を最大化し、サークルの創造性を力強く推進する。
              </p>
            </div>
          </div>
          <p className="text-muted-foreground mt-4">
            その他にも、学部や学年を越えて様々なバックグラウンドを持つ仲間が在籍中です！
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            最後に：きっかけは、きっとあなたのすぐそばにある
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              「自分にはまだ早いかも」 「スキルがないから不安」
              <br />
              そんな風に感じている人もいるかもしれません。でも、最初はみんなそうでした。
              <br />
              次に"きっかけを渡す人"になるのは、あなたかもしれません。そして、誰かの「好き」がまた誰かに伝わっていく。
              <br />
              それが、しばよこの目指す未来です。
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
