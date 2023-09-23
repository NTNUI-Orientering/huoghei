import React, { FC, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import PageLayout from '../PageLayout';
import { HH } from '../../CONSTS';
import Loader from '../../utils/Loader';
import './EntryPage.less';
import { Link } from 'react-router-dom';
import { useOptionsContext } from '../../hooks/OptionsContext';
import CountDown from '../../components/Countdown/Countdown';

interface FormValues {
  name: string;
  club: string;
  class: string;
  phone: string;
  email: string;
  times_completed: number;
  snusk: string;
  prepayment: boolean;
  bus: boolean;
}

interface FormErrors {
  [error: string]: string;
}

const EntryPage: FC = () => {
  const { options, service } = useOptionsContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const initialValues: FormValues = {
    name: '',
    club: '',
    class: 'Herrer',
    phone: '',
    email: '',
    times_completed: 0,
    snusk: 'Ja',
    prepayment: true,
    bus: false
  };

  const validateValues = (values: FormValues) => {
    const errors: FormErrors = {};

    if (!values.name) {
      errors.name = 'Navn er påkrevd';
    } else if (values.name.length < 2) {
      errors.name = 'Navn må inneholde minst to bokstaver';
    }

    if (!values.club) {
      errors.club = 'Klubb er påkrevd';
    } else if (values.club.length < 2) {
      errors.club = 'Klubb må inneholde minst to bokstaver';
    }

    if (!values.class) {
      errors.class = 'Velg klasse';
    }

    if (!values.phone) {
      errors.phone = 'Mobilnummer er påkrevd';
    } else if (!/^(\+\d{1,3}\s{0,1})?[0-9]{8,14}$/i.test(values.phone)) {
      errors.phone = 'Feil format. Vennligst benytt formatet +47 98765432';
    }

    if (!values.email) {
      errors.email = 'E-mail er påkrevd';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Ugyldig e-mail';
    }

    // Ikke behov for validering av antallet tidligere fullførte løp

    if (!values.snusk) {
      errors.snusk = 'Velg et alternativ';
    }

    // Prepayment og transport er allerede forhåndsutfylt og boolske. Ingen behov for valdiering
    return errors;
  };

  const onSubmit = async (values: FormValues) => {
    //console.log(values);
    setIsSubmitting(true);
    const urlParams = new URLSearchParams();

    Object.keys(values).forEach((key) => {
      const keyTyped = key as keyof typeof values;
      const value = values[keyTyped];
      urlParams.append(key, String(value));

      //console.log(keyTyped, value);
    });

    const response = await fetch(HH.hostUrl + HH.registerRunner + '?' + urlParams, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' }
    });

    setIsSubmitting(false);
    //console.log(response);
    if (response.ok) {
      setIsSubmitted(true);
      return;
    }
  };

  const getDate = (date: string) => {
    const dat = new Date(date);
    dat.setHours(0, 0, 0, 0);
    return dat;
  };

  const getTodaysDate = () => {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    return date;
  };

  //https://stackoverflow.com/questions/70413214/problem-with-select-field-in-formik-when-onchange-option-given
  // https://formik.org/docs/migrating-v2#checkboxes-and-select-multiple

  return (
    <PageLayout>
      <div>
        {service?.status === 'loading' && <Loader />}
        {service?.status === 'error' && <div>{JSON.stringify(service.error.message)}</div>}
        {service?.status === 'fetched' && (
          <div className="entry-page">
            <h1>Påmelding Hu og Hei</h1>
            {/* options && JSON.stringify(options) */}
            {!options && <div>Det har oppstått en feil.</div>}

            {
              // Påmeldingsfristen er utgått:

              options &&
              options.paamelding_stenger &&
              getDate(options.paamelding_stenger) < getTodaysDate() ? (
                <div>
                  Påmelding stengte {getDate(options.paamelding_stenger).toLocaleDateString()}
                </div>
              ) : // Påmeldingsfristen åpner:

              options &&
                options.paamelding_aapner &&
                !(getDate(options.paamelding_aapner) <= getTodaysDate()) ? (
                <div>
                  Påmelding til Hu og Hei {getDate(options.paamelding_aapner).getFullYear()} vil
                  komme på denne siden.
                  <br />
                  <br />
                  Det vil bli åpnet for påmelding{' '}
                  {getDate(options.paamelding_aapner).toLocaleDateString()}
                </div>
              ) : isSubmitting ? (
                <Loader />
              ) : !isSubmitted ? (
                // Når påmeldingsfristen er åpnet -> Meld på!:
                <Formik initialValues={initialValues} validate={validateValues} onSubmit={onSubmit}>
                  <div className="row">
                    <div className="col">
                      <h3>
                        Påmeldingen til Hu og hei{' '}
                        {options ? getDate(options.paamelding_aapner).getFullYear() : ''} er nå
                        åpnet!
                      </h3>
                      <h4>
                        Påmeldingsfrist:{' '}
                        <span>
                          {options && getDate(options.paamelding_stenger).toLocaleDateString()}
                        </span>
                      </h4>
                      <Form className="entry-form">
                        <label htmlFor="name">Navn</label>
                        <Field
                          className="input-field"
                          id="name"
                          name="name"
                          placeholder="Ditt navn"
                          type="text"
                        />
                        <div className="error-message">
                          <ErrorMessage name="name" />
                        </div>

                        <label htmlFor="club">Klubb</label>
                        <Field
                          className="input-field"
                          id="club"
                          name="club"
                          placeholder="Din klubb"
                          type="text"
                        />
                        <div className="error-message">
                          <ErrorMessage name="club" />
                        </div>

                        <label htmlFor="class">Klasse</label>
                        <Field
                          className="input-select"
                          id="class"
                          name="class"
                          placeholder={initialValues.club}
                          component="select"
                        >
                          <option value="Herrer">Herrer</option>
                          <option value="Damer">Damer</option>
                          <option value="Veteran herrer">Veteran herrer</option>
                          <option value="Veteran damer">Veteran damer</option>
                          <option value="Parløp ungdom">Parløp ungdom</option>
                        </Field>
                        <div className="error-message">
                          <ErrorMessage name="class" />
                        </div>

                        <label htmlFor="phone">Telefon</label>
                        <Field
                          className="input-field"
                          id="phone"
                          name="phone"
                          placeholder="+47 98765432"
                          type="phone"
                        />
                        <div className="error-message">
                          <ErrorMessage name="phone" />
                        </div>

                        <label>E-mail</label>
                        <Field
                          className="input-field"
                          id="email"
                          name="email"
                          placeholder="ola@nordmann.no"
                          type="email"
                        />
                        <div className="error-message">
                          <ErrorMessage name="email" />
                        </div>

                        <label>Antall ganger tidligere fullført</label>
                        <Field
                          className="input-field"
                          id="times_completed"
                          name="times_completed"
                          placeholder="2"
                          type="number"
                        />

                        <label>Skal du løpe Snuskeløpet?</label>
                        <Field
                          className="input-select"
                          id="snusk"
                          name="snusk"
                          placeholder={initialValues.snusk}
                          component="select"
                        >
                          <option value="0">Nei, kun Gampeløpet</option>
                          <option value="1">Ja</option>
                          <option value="2">Ja, og jeg vil KUN løpe snuskeløpet!</option>
                        </Field>
                        <div className="error-message">
                          <ErrorMessage name="snusk" />
                        </div>

                        <label>Vil du forhåndsbetale?</label>
                        <div className="entry-form-checkbox">
                          <Field id="prepayment" name="prepayment" type="checkbox" />
                          Jeg vil forhåndsbetale
                        </div>
                        {/*
                        <label>Ønsker du å spise middag på hytta? </label>
                        <div className="entry-form-checkbox">
                          <Field id="mat" name="mat" type="checkbox" />
                          Jeg ønsker middag på hytta
                        </div>
                        */}

                        <label>Ønsker du transport til Studenterhytta? (50kr)</label>
                        <div className="entry-form-checkbox">
                          <Field id="bus" name="bus" type="checkbox" />
                          Jeg ønsker transport
                        </div>

                        <button type="submit" disabled={isSubmitting}>
                          {' '}
                          Meld på{' '}
                        </button>
                        <p>
                          Se <Link to={HH.publicPath + '/pamelding/pameldte'}>listen</Link> over
                          påmeldte deltakere.
                        </p>
                      </Form>
                    </div>
                    <div className="col">
                      {options && new Date(options.paamelding_stenger) > new Date() && (
                        <div>
                          <h3>Påmelding stenger om: </h3>
                          <CountDown endDateTime={options.paamelding_stenger} />
                        </div>
                      )}

                      <div className="payment-information">
                        <h4>Betalingsinformasjon</h4>
                        <h5>Snuskeløpet</h5>
                        <ul className="list-group">
                          <li className="list-group-item">
                            {'Vipps: ' +
                              options?.paamelding_avgift_snusk +
                              'kr - Betales til nummer 726401'}
                          </li>
                          <li className="list-group-item">
                            {'Etteranmelding: ' +
                              options?.paamelding_avgift_snusk_etteranmelding +
                              'kr (Vipps på arena fredag)'}
                          </li>
                        </ul>
                        <h5>Gampeløpet</h5>
                        <ul className="list-group">
                          <li className="list-group-item">
                            {'Vipps: ' +
                              options?.paamelding_avgift_gamp +
                              'kr - Betales til nummer 726401 '}
                          </li>
                          <li className="list-group-item">
                            {'Vipps etter utgått påmeldingsfrist: ' +
                              options?.paamelding_avgift_gamp_arena +
                              'kr - Betales til nummer 726401 '}
                          </li>
                          <li className="list-group-item">
                            {'Har du ikke Vipps? Forhåndsbetal i nettbank til kontonr: ' +
                              HH.kontonr +
                              ". Merk betalingen med 'Hu og Hei + DITT NAVN'."}
                          </li>
                          <li className="list-group-item">
                            {'Etteranmelding: ' +
                              options?.paamelding_avgift_gamp_etteranmelding +
                              'kr (Vipps på arena lørdag)'}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Formik>
              ) : (
                <div>
                  <p> Du er nå påmeldt. Takk for din registrering! </p>
                  <p>
                    Se <Link to={HH.publicPath + '/pamelding/pameldte'}>listen</Link> over påmeldte
                    deltakere.
                  </p>
                </div>
              )
            }
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default EntryPage;
