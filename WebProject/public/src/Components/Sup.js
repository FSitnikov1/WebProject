import '../css/sup.css'
import sup1 from '../img/sup1.svg'
import sup2 from '../img/sup2.svg'
import sup3 from '../img/sup3.svg'
import sup4 from '../img/sup4.svg'
import sup5 from '../img/sup5.svg'
import sup6 from '../img/sup6.svg'
import sup7 from '../img/sup7.svg'
import sup8 from '../img/sup8.svg'

export default function Support() {
  return (
    <section className="sup">
      <h2>Разработка<br />от Drupal-coder</h2>
      <div className="container">
        <div className="row mx-0">
          <div className="col-12 col-md-6 col-lg-3 sup-col">
            <div className="sup-cards">
              <div className="sup-number">01.</div>
              <div className="sup-headline">Постановка задачи по Email</div>
              <div className="text">
                Удобная и привычная модель постановки задач, при которой задачи фиксируются и никогда не теряются.
              </div>
              <div className="sup-img"><img src={sup1} /></div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 sup-col">
            <div className="sup-cards">
              <div className="sup-number">02.</div>
              <div className="sup-headline">Система Helpdesk – отчетность, прозрачность</div>
              <div className="text">
                Возможность посмотреть все заявки в работе и отработанные часы в личном кабинете через браузер.
              </div>
              <div className="sup-img"><img src={sup2} /></div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 sup-col">
            <div className="sup-cards">
              <div className="sup-number">03.</div>
              <div className="sup-headline">Расширенная техническая поддержка</div>
              <div className="text">
                Возможность организации расширенной техподдержки с 8:00 до 22:00 без выходных.
              </div>
              <div className="sup-img"><img src={sup3} /></div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 sup-col">
            <div className="sup-cards">
              <div className="sup-number">04.</div>
              <div className="sup-headline">Персональный менеджер проекта</div>
              <div className="text">
                Ваш менеджер проекта всегда в курсе текущего состояния проекта и в любой момент готов ответить на любые
                вопросы.
              </div>
              <div className="sup-img"><img src={sup4} /></div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 sup-col">
            <div className="sup-cards">
              <div className="sup-number">05.</div>
              <div className="sup-headline">Удобные способы оплаты</div>
              <div className="text">
                Безналичный расчет по договору или электронные деньги: WebMoney, Яндекс.Деньги, Paypal.
              </div>
              <div className="sup-img"><img src={sup5} /></div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 sup-col">
            <div className="sup-cards">
              <div className="sup-number">06.</div>
              <div className="sup-headline">Работаем с SLA и NDA</div>
              <div className="text">
                Работа в рамках соглашений о конфиденциальности и об уровне качества работ.
              </div>
              <div className="support-img"><img src={sup6} /></div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 sup-col">
            <div className="sup-cards">
              <div className="sup-number">07.</div>
              <div className="sup-headline">Штатные специалисты</div>
              <div className="text">
                Надежные штатные специалисты, никаких фрилансеров.
              </div>
              <div className="sup-img"><img src={sup7} /></div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 sup-col">
            <div className="sup-cards">
              <div className="sup-number">08.</div>
              <div className="sup-headline">Удобные каналы связи</div>
              <div className="text">
                Консультации по телефону, скайпу, в месенджерах.
              </div>
              <div className="sup-img"><img src={sup8} /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
