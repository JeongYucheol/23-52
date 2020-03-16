import React, { useEffect, useState } from 'react';
import { Formik }                     from 'formik';
import S                              from './styles';
import NS                             from './nstyles';
import Notifications, {notify}        from 'react-notify-toast';
import Success                        from './Success';
import Failed                         from './Failed';
import Stopwatch                      from '../../lib/Stopwatch';

const Room = ({ data }) => {

  const [currentStep, setCurrentStep] = useState(0);
  const [onSuccess, setOnSuccess]     = useState(false);
  const [onFailed, setOnFailed]       = useState(false);
  const [leftTime, setLeftTime]       = useState(null);

  const log = JSON.parse(localStorage.getItem(data._id));
  const steps = data.steps;
  const step = steps[currentStep];

  const next = () => {
   

    if (currentStep === steps.length - 1) {
      setOnSuccess(true);
      setTimeout(() => {
        localStorage.removeItem(data._id);
      }, 2000);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const timeOver = () => {
    setOnFailed(true);
  };

  const confirmAnswer = (answer, resetForm) => {

    if (answer.toUpperCase() === step.answer) {
      next();
      resetForm();
    } else {
      notify.show('틀렸습니다. 다시 풀어보세요', 'error', 2000, {text: 'white'});
      resetForm();
    }
  }

  const writeLog = () => {
    if (leftTime) {
      localStorage.setItem(data._id, JSON.stringify({
        leftTime: {
          raw: leftTime.raw
        },
        stage: {
          current: currentStep
        },
      }));
    }
  };

  useEffect(() => {

    if (leftTime && !leftTime.minutes && !leftTime.seconds) {
      timeOver();
      setTimeout(() => {
        localStorage.removeItem(data._id);
      }, 2000);
    }

    writeLog();

  }, [leftTime]);

  useEffect(() => {

    if (log) {
      setCurrentStep(log.stage.current);
    }

  }, []);

  if (!data) return null;

  return (
    <>
      <Notifications />
      {
        data.roomStyle === 'basic' &&
          <S.Wrapper coverUrl={step.image}>
            {
              onSuccess &&
              <Success
                data         = {data.successView}
                completeTime = {leftTime}
              />
            }
            {
              onFailed &&
              <Failed
                data={data.failView}
              />
            }
            <S.Count>
              {
                (!onSuccess && !onFailed) &&
                <Stopwatch
                  currentTime = {(time, rawTime) => setLeftTime({...time, raw: rawTime})}
                  time        = {log ? Number(log.leftTime.raw) : data.limit * 60}
                />
              }
            </S.Count>
            <S.Item>
              <S.Question>
                <img src={step.question}/>
              </S.Question>
              <S.TextBox>
                <S.Text>{step.text}</S.Text>
                <S.NextActions>
                  {
                    !!step.input.length &&
                      <Formik
                        initialValues={{ answer: '' }}
                        onSubmit={(values, { resetForm, ...actions }) => {

                          setTimeout(() => {
                            confirmAnswer(values.answer, resetForm);
                            actions.setSubmitting(false);
                          }, 1000);
                        }}
                      >
                        { ({resetForm, ...props}) =>(
                          <S.Form onSubmit={props.handleSubmit}>
                            { step.input.map((inputInfo, i) => (
                              <input
                                key      = {i}
                                type     = {inputInfo.type}
                                onChange = {props.handleChange}
                                onBlur   = {props.handleBlur}
                                value    = {props.values.answer}
                                name     = "answer"
                              />
                            ))}
                            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
                            <button type="submit">입력</button>
                          </S.Form>
                        )
                      }
                      </Formik>
                  }
                  {
                    !step.input.length &&
                    <S.Button onClick={next}>다음</S.Button>
                  }
                </S.NextActions>
              </S.TextBox>

            </S.Item>

          </S.Wrapper> 
        }
        {
          data.roomStyle === 'nature' &&
          <NS.Wrapper coverUrl={step.image}>
            {
              onSuccess &&
              <Success
                data         = {data.successView}
                completeTime = {leftTime}
              />
            }
            {
              onFailed &&
              <Failed
                data={data.failView}
              />
            }
            <NS.Count>
              {
                (!onSuccess && !onFailed) &&
                <Stopwatch
                  currentTime = {(time, rawTime) => setLeftTime({...time, raw: rawTime})}
                  time        = {log ? Number(log.leftTime.raw) : data.limit * 60}
                />
              }
            </NS.Count>
            <NS.Item>
              <NS.Question>
                <img src={step.question}/>
              </NS.Question>
              <NS.TextBox>
                <NS.Text>{step.text}</NS.Text>
                <NS.NextActions>
                  {
                    !!step.input.length &&
                      <Formik
                        initialValues={{ answer: '' }}
                        onSubmit={(values, { resetForm, ...actions }) => {

                          setTimeout(() => {
                            confirmAnswer(values.answer, resetForm);
                            actions.setSubmitting(false);
                          }, 1000);
                        }}
                      >
                        { ({resetForm, ...props}) =>(
                          <NS.Form onSubmit={props.handleSubmit}>
                            { step.input.map((inputInfo, i) => (
                              <input
                                key      = {i}
                                type     = {inputInfo.type}
                                onChange = {props.handleChange}
                                onBlur   = {props.handleBlur}
                                value    = {props.values.answer}
                                name     = "answer"
                              />
                            ))}
                            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
                            <button type="submit">입력</button>
                          </NS.Form>
                        )
                      }
                      </Formik>
                  }
                  {
                    !step.input.length &&
                    <NS.Button onClick={next}>다음</NS.Button>
                  }
                </NS.NextActions>
              </NS.TextBox>

            </NS.Item>

          </NS.Wrapper>          
        }
    </>
  );
};

export default Room;