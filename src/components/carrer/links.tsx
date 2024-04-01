import SectionTitle from "../sectionTitle";
import LinkItem from "./linkItem";

export default function Links() {
  const linkContents = [
    {
      link: "https://twitter.com/wasa_rocket2024",
      imgSrc: "/socialMediaIcons/x.svg",
      imgAlt: "X icon",
      children: (
        <p className="my-auto">
          WASAの新歓用Twitterアカウントです。
          <br />
          Twitterでは新歓情報を発信していますので、フォローお願いします！
        </p>
      ),
    },
    {
      link: "https://line.me/ti/g2/sw9CttRGTQTNn0r3sgTp29QxwdN_ugZL15j9bw?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
      imgSrc: "/socialMediaIcons/line.svg",
      imgAlt: "Line Openchat",
      children: (
        <p className="my-auto">
          WASAの新歓用openchatです。
          <br />
          新歓イベントなど情報発信や、参加受付、質問などを受け付けています！
        </p>
      ),
    },
    {
      link: "https://marshmallow-qa.com/uc62li1r7ywrfp2?t=tAhRcs&utm_medium=twitter&utm_source=promotion",
      imgSrc: "/socialMediaIcons/marshmallow.svg",
      imgAlt: "marshmallow icon",
      children: (
        <p className="my-auto">
          WASAの匿名質問箱です。
          <br />
          質問は常に受け付けているので、気軽に質問してください！
        </p>
      ),
    },
  ];

  return (
    <section className="">
      <SectionTitle>CONTACT</SectionTitle>
      {linkContents.map((content, index) => (
        <LinkItem
          key={index}
          link={content.link}
          imgSrc={content.imgSrc}
          imgAlt={content.imgAlt}
        >
          {content.children}
        </LinkItem>
      ))}
    </section>
  );
}
