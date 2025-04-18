import Image from "next/image";

export default function Page() {
  return (
    <section className="max-w-5xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-10">WASAロケットプロジェクト</h1>
      
      {/* WASAとは */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold border-b-2 border-gray-300 pb-2 mb-4">1. WASAとは</h2>
        <p className="text-lg leading-relaxed mb-4">
          正式名称は早稲田大学宇宙航空研究会、通称WASAです。早稲田大学と日本女子大学のインカレサークルとなっております(その他の大学の方も入会はできます)。
          1つのサークルに3つのプロジェクトが存在(ロケット、鳥人間、天文)。当サイトはロケットプロジェクトです。
        </p>
      </div>
      
      {/* WASAロケとは */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold border-b-2 border-gray-300 pb-2 mb-4">2. WASAロケとは</h2>
        <p className="text-lg leading-relaxed mb-4">
          WASAロケは、毎年3月に行われる「種子島ロケットコンテスト」への出場を目指して、日々製作活動を行っています。
          また、毎年9月に行われる「えひめ南予成層圏共同気球実験」に向けてロックーンの製作も行っています。
        </p>
        <p className="text-lg leading-relaxed mb-4">
          ロケットプロジェクトでは主に３つの活動を行っています。それぞれの活動は画面上またはサイドバーから飛べます！
        </p>
      </div>
      
      {/* 年間スケジュール */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold border-b-2 border-gray-300 pb-2 mb-4">3. 年間スケジュール</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="w-full">
            <Image 
              src="/aboutus/31.png" 
              alt="年間スケジュール1"
              width={400}
              height={300}
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="w-full">
            <Image 
              src="/aboutus/32.png" 
              alt="年間スケジュール2"
              width={400}
              height={300}
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="w-full">
            <Image 
              src="/aboutus/33.png" 
              alt="年間スケジュール3"
              width={400}
              height={300}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        <p className="text-sm mt-2 italic">※上記の場合と少し異なる場合があります</p>
      </div>
      
      {/* 活動場所 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold border-b-2 border-gray-300 pb-2 mb-4">4. 活動場所</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">① 早稲田大学 学生会館</h3>
          <div className="w-full h-[450px] overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4488.505038658715!2d139.71403497681698!3d35.705968472579265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d1e9f15d395%3A0xd4176c29273d4bae!2z5pep56iy55Sw5aSn5a2mIOaIuOWxseOCreODo-ODs-ODkeOCuSDlrabnlJ_kvJrppKg!5e1!3m2!1sja!2sjp!4v1744967508104!5m2!1sja!2sjp" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">② 早稲田大学西早稲田キャンパス</h3>
          <div className="w-full h-[450px] overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8976.994916954054!2d139.70706899999996!3d35.7061031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d2492b7c117%3A0x3b993294bf3846f7!2z5pep56iy55Sw5aSn5a2mIOilv-aXqeeosueUsOOCreODo-ODs-ODkeOCuQ!5e1!3m2!1sja!2sjp!4v1744967530420!5m2!1sja!2sjp" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-4xl font-bold text-white-600">
            初心者大歓迎！！　一緒に楽しみましょう！！
          </p>
        </div>
      </div>
    </section>
  );
}
