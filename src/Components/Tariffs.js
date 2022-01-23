import '../css/tariffs.css'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Form from './Form';
import modalz from './Modal';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function Tariffs() {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <section className="tariffs">
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div style={{ background: "linear-gradient(261.2deg, rgba(255, 255, 255, 0.19) -114.85%, rgba(255, 255, 255, 0) 69.04%), #090a13", borderRadius: "25px" }} className={classes.paper}>
                        <h2 id="FormName" style={{ paddingBottom: "10px", color: "white", textAlign: "center" }}>Оставить заявку <br />на поддержку сайта</h2>
                        <Form />
                    </div>
                </Fade>
            </Modal>
            <h2 id="tariffs">Тарифы</h2>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 order-1 tariff-col">
                        <div className="tariff-block">

                            <div className="tariff-title">Стартовый</div>
                            <ul>
                                <li>Консультации и работы по SEO</li>
                                <li>Услуги дизайнера</li>
                                <li>Неиспользованные <br /> оплаченные часы переносятся <br />на следующий месяц</li>
                                <li>предоплата от 6 000 рублей в <br />месяц</li>
                            </ul>
                            <button id="contact-button-1" onClick={handleOpen} className="contact-button form-opener">СВЯЖИТЕСЬ С НАМИ!</button>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 order-3 tariff-col">
                        <div className="tariff-block">
                            <div className="tariff-title">VIP</div>
                            <ul>
                                <li>Консультации и работы по SEO</li>
                                <li>Услуги дизайнера</li>
                                <li>Максимальное время реакции <br />- в день обращения</li>
                                <li>Неиспользованные <br />оплаченные часы не <br />переносятся</li>
                                <li>Предоплата от 270 000 рублей <br />в месяц</li>
                            </ul>
                            <button id="contact-button-2" onClick={handleOpen} className="contact-button form-opener">СВЯЖИТЕСЬ С НАМИ!</button>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 order-2 tariff-col default-tariff">
                        <div className="tariff-block">
                            <div className="tariff-title">Бизнес</div>
                            <ul>
                                <li>Консультации и работы по SEO</li>
                                <li>Услуги дизайнера</li>
                                <li>Высокое время реакции - до 2 <br /> рабочих дней</li>
                                <li>Неиспользованные <br /> оплаченные часы не <br />переносятся</li>
                                <li>Предоплата от 30 000 рублей в <br />месяц</li>
                            </ul>
                            <button id="contact-button-3" onClick={handleOpen} className="contact-button form-opener">СВЯЖИТЕСЬ С НАМИ!</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tariffs-custom">
                Вам не подходят наши тарифы? Оставьте заявку и мы <br /> предложим вам индивидуальные условия!<br />
                <a id="contact-button-4" className="form-opener" href>ПОЛУЧИТЬ ИНДИВИДУАЛЬНЫЙ ТАРИФ</a>
            </div>
        </section>
    )
}
