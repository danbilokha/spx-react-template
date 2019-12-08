import * as React from 'react';
import globalStyles from '../../styles/global.module.scss';
import styles from './Home.module.scss';
import {Link} from 'react-router-dom';

const arrow: any = require('../../assets/pages/home/arrow.png');
const collective: any = require('../../assets/pages/home/collective.jpg');

export default class Home extends React.Component<{}, {}> {
  public render(): React.ReactElement<{}> {
    return (
        <div className={globalStyles.page_content}>
        <section>
          <div className={styles.header_box}>
            <div className={styles.header_box_cover}>
              <h1>Кафедра Інформаційно-Телекомунікаційних мереж</h1>
            </div>
  
            <Link className={styles.Why} to="history">
              <div className={styles.header_box_sub2}>
                <h1>Історія кафедри</h1>
              </div>
            </Link>
            <a className={styles.Why} href="/#benefits">
              <div className={styles.header_box_sub1}>
                <h1>Чому саме до нас?</h1>
              </div>
            </a>
  
            <h3 id="kafedra_ITM">Спеціальність</h3>
            <h2>172 Телекомунікації та радіотехніка</h2>
            <h3>Спеціалізація</h3>
            <h2>Інформаційно-комунікаційні технології</h2>
            <div className={styles.motivation_box}>
              <div className={styles.motivation_box_Why}>
                <h2>Шановні Абітурієнти!</h2>
                <p>
                  Ви кожного дня використовуєте «хмарні» послуги та різноманітні
                  гаджети?
                </p>
                <p>Вважаєте себе достатньо мотивованою людиною?</p>
                <p>Хочете стати справжнім майстром своєї справи? </p>
                <p>
                  Не пливеш за течією, а намагаєшся досягти більшого ніж інші?
                </p>
              </div>
              <div className={styles.arrow_box}>
                <img src={arrow} alt='About ITM' id="arrow_KafedraPage" />
              </div>
              <div className={styles.motivation_box_know}>
                <h2>Тоді вам необхідно знати</h2>
                <p>
                  Домінуючою стратегією розвитку цивілізованих країн стає
                  концепція інформаційного суспільства, в якому матеріальною
                  основою стають інформаційно-комунікаційні технології
                  (спеціалізація нашої кафедри) та системи, де тісно
                  переплітаються завдання формування, зберігання, обробки та
                  вільного обміну в необмеженому просторовому ресурсі значних
                  обсягів інформації, які рухаються від джерел до чисельних
                  споживачів.{' '}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className={globalStyles.clearfix}>
            <h2>Лідер в сфері інфокомунікацій</h2>
            <p>
              <img src={collective} id="image_Collective" />
              Науковий керівник кафедри - академік НАНУ, доктор технічних наук,
              заслужений діяч науки і техніки України, лауреат Державних премій
              СРСР, УРСР та України в галузі науки і техніки Ільченко Михайло
              Юхимович. Виконуючий обовязки завідувача кафедри - доцент, кандидат
              технічних наук, Явіся Валерій Сергійович. Вчений секретар кафедри -
              старший викладач Петрова Валентина Миколаївна.
            </p>
          </div>
          <p id="benefits">
            <Link className={styles.inline_link} to="history#history_kafedra">
              Кафедра{' '}
            </Link>
            <Link className={styles.inline_link} to="enter/#Enter">
              Інформаційно-телекомунікаційних мереж{' '}
            </Link>
            готує фахівців за спеціальністю Телекомунікації та радіотехніка та
            спеціалізацією Інформаційно-комунікаційні технології (ІКТ).
          </p>
          <p>
            Кафедра телекомунікацій займає найвищі позиції у рейтингу
            університету, зокрема, за рейтингами науково-педагогічних працівників,
            науково-інноваційної діяльності, індексом творчих досягнень студентів,
            активності міжнародної діяльності.
          </p>
          <p>
            Після проходження навчання студенти без зусиль знаходять роботу в
            сфері інфотелекомунікацій. Наші Випускники працюють на інженерних та
            управлінських посадах провідних підприємств, організацій та їх
            представництв: в сфері електроніки, телекомунікацій, програмного
            забезпечення і інформаційних технологій. Зокрема, Alcatel-Lucent,
            Nokia Corporation, Lifecell (Астеліт), Vodafone (МТС), Укртелеком,
            Київстар та інш.
          </p>
        </section>
        <hr />
        <section>
          <h1 className={globalStyles.center}>Подвійний диплом</h1>
        </section>
      </div>
    );
  }
}