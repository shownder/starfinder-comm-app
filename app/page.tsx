'use client';

import { Animator } from '@arwes/react-animator';
import { Dots, GridLines, MovingLines } from '@arwes/react-bgs';
import { FrameHeader, FrameNefrex, FrameUnderline } from '@arwes/react-frames';
import { Text } from '@arwes/react-text'
import { Orbitron } from 'next/font/google'
import { type BleepsProviderSettings } from '@arwes/react-bleeps'
import { BleepsProvider } from '@arwes/react-bleeps'
import { BleepsOnAnimator } from '@arwes/react-core'
import { useEffect, useState } from 'react';
import { Animated } from '@arwes/react';

const orbitron = Orbitron({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})

type BleepsNames = 'type' | 'intro';

export default function Home() {
  const [active, setActive] = useState(false)
  const [messageActive, setMessageActive] = useState(true)
  const [display, setDisplay] = useState('none')

  useEffect(() => {
    const tid = setInterval(() => {
      setMessageActive(false);
    }, 6000);
    return () => clearInterval(tid);
  }, []);

  useEffect(() => {
    const tid = setInterval(() => {
      setActive(true);
      setDisplay('block');
    }, 7000);
    return () => clearInterval(tid);
  }, []);

  const bleepsSettings: BleepsProviderSettings<BleepsNames> = {
    categories: {
      interaction: { volume: 0.75 },
      notification: { volume: 1 }
    },
    bleeps: {
      type: {
        category: 'interaction',
        sources: [
          { src: './sounds/type.webm', type: 'audio/webm' },
          { src: './sounds/type.mp3', type: 'audio/mpeg' }
        ],
        loop: true
      },
      intro: {
        category: 'notification',
        sources: [
          { src: './sounds/error.webm', type: 'audio/webm' },
          { src: './sounds/error.mp3', type: 'audio/mpeg' }
        ]
      }
    }
  }
  
  return (
    <BleepsProvider {...bleepsSettings}>
      <div style={{ backgroundColor: 'hsla(180, 100%, 75%, 0.05)' }}>
        <Animator duration={{ enter: 2, interval: 10 }}>
          <BleepsOnAnimator<BleepsNames> transitions={{ entering: 'intro' }} />
          <Animated
            as='div'
            style={{
              position: 'absolute',
              width: '100vw',
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              inset: 0,
              backgroundColor: '#000906',
              backgroundImage:
                'radial-gradient(85% 85% at 50% 50%, hsla(185, 100%, 25%, 0.25) 0%, hsla(185, 100%, 25%, 0.12) 50%, hsla(185, 100%, 25%, 0) 100%)'
            }}
          >
            <GridLines lineColor="hsla(180, 100%, 75%, 0.05)" distance={30} />
            <Dots color="hsla(180, 100%, 75%, 0.05)" distance={30} />
            <MovingLines lineColor="hsla(180, 100%, 75%, 0.07)" distance={30} sets={20} />
          </Animated>
        </Animator>

        <div style={{ height: '100vh', width: '100vw', display: 'flex', position: 'absolute' }}>
          <div style={{ position: 'relative', width: 280, height: 150, display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000, alignSelf: 'center', margin: 'auto' }}>
            <Animator duration={{ enter: 2, exit: 1 }} active={messageActive}>
              <FrameNefrex
                style={{
                  // @ts-expect-error css variables
                  '--arwes-frames-bg-color': 'hsl(180, 75%, 10%)',
                  '--arwes-frames-line-color': 'hsl(180, 75%, 30%)',
                  '--arwes-frames-deco-color': 'hsl(180, 75%, 50%)'
                }}
                leftBottom
                rightTop
              />
              
              <Animator> 
              <BleepsOnAnimator<BleepsNames> transitions={{ entering: 'intro' }} />
                <Text as="p" className={`text-decipher ${orbitron.className}`} manager='decipher' fixed style={{ color: '#ddd', textAlign: 'center', fontWeight: '900', fontSize: '1.5rem'}}>
                  INCOMING COMMUNICATION
                </Text>
              </Animator>
            </Animator>
          </div>

          <div style={{ display: 'flex', zIndex: 1000, position: 'absolute', margin: 'auto' }}>
            <Animator active={active}>
              <div style={{ position: 'relative', width: 300, height: 30,marginTop: 10, marginLeft: 10, marginRight: 10, marginBottom: 10, display: display }}>
                <FrameHeader
                  style={{
                    // @ts-expect-error css variables
                    '--arwes-frames-bg-color': 'hsl(180, 75%, 10%)',
                    '--arwes-frames-line-color': 'hsl(180, 75%, 30%)',
                    '--arwes-frames-deco-color': 'hsl(180, 75%, 50%)'
                  }}
                  contentLength={100}
                />
                <Animated
                as='p'
                style={{ position: 'relative', color: 'cyan', fontSize: '21px', fontWeight: '900' }} className={`header-text ${orbitron.className}`}
                animated={['flicker']}
                >
                  WELCOME
                </Animated>
                <Animated
                  as='div'
                  style={{ position: 'relative', width: '95vw', marginTop: 10, marginBottom: 10 }}
                  animated={['flicker']}
                >
                  <FrameUnderline
                    style={{
                      // @ts-expect-error css variables
                      '--arwes-frames-bg-color': 'hsl(180, 75%, 10%)',
                      '--arwes-frames-line-color': 'hsl(180, 75%, 30%)',
                      '--arwes-frames-deco-color': 'hsl(180, 75%, 50%)'
                    }}
                  />
                  <div style={{ position: 'relative', color: 'cyan', fontSize: '20px', fontWeight: '400', margin: '5px' }} className={`header-text ${orbitron.className}`}>
                    {/* <Animator duration={{ enter: 7 }} > */}
                      {/* <BleepsOnAnimator<BleepsNames> transitions={{ entering: 'type' }} /> */}
                      <Animator active={active} duration={{ enter: 1.5, exit: 1.5 }}>
                        <Text as='div' manager="decipher" easing="outSine" fixed>
                          <p>Greetings recruit,</p>
                          <br />
                          <p>We are pleased to let you know that you have been chosen out of thousands of candidates to join our prestigious group.</p>
                          <br />
                          <p>Please make your way to Absalom Station by Pharast Firstday at 0600 SPT (Standard Pact Time). For your convenience, we have hired  the Okimoro, a shuttle leaving from Aballon that will have you here right on time.</p>
                          <br />
                          <p>You will also find that 1000 credits have been transferred to your account as a means to buy equipment, I recommend you use it prior to your arrival.</p>
                          <br />
                          <p>Once you arrive, look for Duravor Kreel, who will be facilitating your membership to the Society. He will be waiting for you in docking bay 94 at the aforementioned time.</p>
                          <br />
                          <p>We thank you again for your interest in joining the Starfinder Society, and look forward to meeting you!</p>
                          <br />
                          <p>Sincerely,</p>
                          <br />
                          <p>Chiskisk,</p>
                          <p>Starfinder Society, Council Member</p>
                          <br />
                          <br />
                          <p>PS:</p>
                          <br />
                          <p>Station security has sent out a mandate that all new arrivals must be made aware of gang war rumours. I myself have seen no such evidence, and believe they are being dramatic.</p>
                          <br />
                          <p>That said, it never hurts to be prepared for anything!</p>
                          <br />
                        </Text>
                      </Animator>
                      {/* <Animator>
                        <Text>Greetings recruit,</Text>
                      </Animator>
                      <br />
                      <Animator>
                        <Text>We are pleased to let you know that you have been chosen out of thousands of candidates to join our prestigious group.</Text>
                      </Animator>
                      <br />
                      <Animator>
                        <Text>Please make your way to Absalom Station by Pharast Firstday at 0600 SPT (Standard Pact Time). For your convenience, we have hired  the Okimoro, a shuttle leaving from Aballon that will have you here right on time.</Text>
                      </Animator>
                      <br />
                      <Animator>
                        <Text>You will also find that 1000 credits have been transferred to your account as a means to buy equipment, I recommend you use it prior to your arrival.</Text>
                      </Animator>
                      <br />
                      <Animator>
                        <Text>Once you arrive, look for Duravor Kreel, who will be facilitating your membership to the Society. He will be waiting for you in docking bay 94 at the aforementioned time.</Text>
                      </Animator>
                      <br />
                      <Animator>
                        <Text>We thank you again for your interest in joining the Starfinder Society, and look forward to meeting you!</Text>
                      </Animator>
                      <br />
                      <Animator>
                        <Text>Sincerely,</Text>
                      </Animator>
                      <br />
                      <Animator>
                        <Text>Chiskisk,</Text>
                        <Text>Starfinder Society, Council Member</Text>
                      </Animator>
                      <br />
                      <Animator>
                        <Text>Station security has sent out a mandate that all new arrivals must be warned of rumours of a gang war threat. I myself have seen no such evidence, and believe they are being dramatic.</Text>
                      </Animator>
                      <br />
                      <Animator>
                        <Text>That said, it never hurts to be prepared for anything!</Text>
                      </Animator> */}
                    {/* </Animator> */}
                  </div>
                </Animated>
              </div>
            </Animator>
          </div>
        </div>
      </div>
    </BleepsProvider>
  );
}
