
import '../css/team.css'
import SS from '../img/SS.jpg'
import AS from '../img/AS.jpg'
import DB from '../img/DB.jpg'
import RA from '../img/RA.jpg'
import IT from '../img/IT.jpg'
import ED from '../img/ED.jpg'


export default function Team() {
    return (
        <section className="container team">
            <div className="team-block row">
                <h2 className="col-12">Команда</h2>
                <div className="col-6 col-sm-6 col-md-4 member-block">
                    <div className="member-card">
                        <div className="member-photo">
                            <img src={SS} alt="Worker" width={280} height={280} className="img-responsive" />
                        </div>
                        <div className="member-card-name">Сергей Синица</div>
                        <div className="member-card-signature">Руководитель отдела веб-<br />разработки, канд. техн. наук,<br />заместитель директора</div>
                    </div>
                </div>
                <div className="col-6 col-sm-6 col-md-4 member-block">
                    <div className="member-card">
                        <div className="member-photo">
                            <img src={RA} alt="Worker" width={280} height={280} className="img-responsive" />
                        </div>
                        <div className="member-card-name">Роман Агабеков</div>
                        <div className="member-card-signature">Руководитель отдела DevOPS,<br />директор</div>
                    </div>
                </div>
                <div className="col-6 col-sm-6 col-md-4 member-block">
                    <div className="member-card">
                        <div className="member-photo">
                            <img src={AS} alt="Worker" width={280} height={280} className="img-responsive" />
                        </div>
                        <div className="member-card-name">Алексей Синица</div>
                        <div className="member-card-signature">Руководитель отдела<br /> поддержки сайтов</div>
                    </div>
                </div>
                <div className="col-6 col-sm-6 col-md-4 member-block">
                    <div className="member-card">
                        <div className="member-photo">
                            <img src={DB} alt="Worker" width={280} height={280} className="img-responsive" />
                        </div>
                        <div className="member-card-name">Дарья Бочкарёва</div>
                        <div className="member-card-signature">Руководитель отдела<br /> продвижения, контекстной <br />рекламы и контент-поддержки <br />сайтов
                        </div>
                    </div>
                </div>
                <div className="col-6 col-sm-6 col-md-4 member-block">
                    <div className="member-card">
                        <div className="member-photo">
                            <img src={IT} alt="Worker" width={280} height={280} className="img-responsive" />
                        </div>
                        <div className="member-card-name">Ирина Торкунова</div>
                        <div className="member-card-signature">Менеджер по работе с<br /> клиентами</div>
                    </div>
                </div>
                <div className="col-6 col-sm-6 col-md-4 member-block">
                    <div className="member-card">
                        <div className="member-photo">
                            <img src={ED} alt="Worker" width={280} height={280} className="img-responsive" />
                        </div>
                        <div className="member-card-name">Эльмира Дьякова</div>
                        <div className="member-card-signature">Менеджер по работе с<br /> клиентами</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
