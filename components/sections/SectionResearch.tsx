import { LINK } from "@/constants/link";
import useSelectData from "@/hooks/useSelectData";
import classNames from "classnames";
import TitleH1 from "../parts/TitleH1";
import TitleH2 from "../parts/TitleH2";
import styles from "./SectionResearch.module.scss";

const data = {
  JP: {
    text: [
      "創発言語",
      "ニューラルネットワークで構成されたエージェント同士に会話させ、",
      "人工的に発生させた言語を解析する「創発言語」の分野を研究しています。",
      "人間の脳の構造を模倣したエージェントを使って、「創発言語」の中に、",
      "自然言語の文法構造のようなものを創発させられないか、構想しています。",
    ],
  },
  EN: {
    text: [
      "創発言語",
      "ニューラルネットワークで構成されたエージェント同士に会話させ、",
      "人工的に発生させた言語を解析する「創発言語」の分野を研究しています。",
      "人間の脳の構造を模倣したエージェントを使って、「創発言語」の中に、",
      "自然言語の文法構造のようなものを創発させられないか、構想しています。",
    ],
  },
} as const;

export default function SectionResearch() {
  const { selectedData } = useSelectData(data);

  return (
    <div className={styles.sectionResearch}>
      <TitleH1 title="Research" />

      <TitleH2 title="Interest" />
      <div className={classNames(styles.line, "_contentMarginLeft")}>
        <p className={styles.h3}>{selectedData.text[0]}</p>
      </div>
      <div className={classNames(styles.line, "_contentMarginLeft")}>
        <p>{selectedData.text[1]}</p>
        <p>{selectedData.text[2]}</p>
      </div>
      <div className={classNames(styles.line, "_contentMarginLeft")}>
        <p>{selectedData.text[3]}</p>
        <p>{selectedData.text[4]}</p>
      </div>

      <TitleH2 title="Publications" />
      <div className={classNames(styles.line, "_contentMarginLeft")}>
        <p className={styles.h3}>Domestic Conference (Non-refereed)</p>
      </div>
      <div className={classNames(styles.line, "_contentMarginLeft")}>
        <p>2023</p>
      </div>
      <div className={classNames(styles.line, "_contentMarginLeft")}>
        <p>
          <span className={styles.Highlight}>加藤大地</span>, 上田亮, 宮尾祐介.{" "}
        </p>
        <p>「簡素なモデルでの創発言語の接触によるクレオール単純化の再現」</p>
        <p>
          言語処理学会第29回年次大会(NLP2023). [
          <a href={LINK.PAPER.NLP2023}>paper</a>]
        </p>
      </div>
    </div>
  );
}
