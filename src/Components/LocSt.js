import '../css/locst.css'
import st1 from '../img/st1.svg'
import st2 from '../img/st2.svg'
import st3 from '../img/st3.svg'
import st4 from '../img/st4.svg'
import st5 from '../img/st5.svg'
import st6 from '../img/st6.svg'
import st7 from '../img/st7.svg'
import st8 from '../img/st8.svg'

export default function Compet() {
    return (
        <section className="st">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>14 лет совершенствуем <br /> компетенции в Drupal <br /> поддержке!</h2>
                        <div className="st-main-text">
                            Разрабатываем и оптимизируем модули, расширяем <br /> функциональность сайтов, обновляем дизайн
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 col-md-3 sto-block">
                        <div className="sty-icon"><img src={st1} /></div>
                        <div className="text">
                            Добавление <br /> информации на сайт,<br /> создание новых <br /> разделов
                        </div>
                    </div>
                    <div className="col-6 col-md-3 sto-block">
                        <div className="sty-icon"><img src={st2} /></div>
                        <div className="text">
                            Разработка <br /> и оптимизация <br /> модулей сайта
                        </div>
                    </div>
                    <div className="col-6 col-md-3 sto-block">
                        <div className="sty-icon"><img src={st3} /></div>
                        <div className="text">
                            Интеграция с CRM, <br /> 1C, платежными <br /> системами, любыми <br /> веб-сервисами
                        </div>
                    </div>
                    <div className="col-6 col-md-3 sto-block">
                        <div className="sty-icon"><img src={st4} /></div>
                        <div className="text">
                            Любые доработки <br /> функционала <br /> и дизайна
                        </div>
                    </div>
                    <div className="col-6 col-md-3 sto-block">
                        <div className="sty-icon"><img src={st5} /></div>
                        <div className="text">
                            Аудит и мониторинг <br /> безопасности Drupal <br /> сайтов
                        </div>
                    </div>
                    <div className="col-6 col-md-3 sto-block">
                        <div className="sty-icon"><img src={st6} /></div>
                        <div className="text">
                            Миграция, импорт <br /> контента и апгрейд <br /> Drupal
                        </div>
                    </div>
                    <div className="col-6 col-md-3 sto-block">
                        <div className="sty-icon"><img src={st7} /></div>
                        <div className="text">
                            Оптимизация <br /> и ускорение <br /> Drupal-сайтов
                        </div>
                    </div>
                    <div className="col-6 col-md-3 sto-block">
                        <div className="sty-icon"><img src={st8} /></div>
                        <div className="text">
                            Веб-маркетинг, <br /> консультации <br /> и работы по SEO
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
