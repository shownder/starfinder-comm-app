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

type BleepsNames = 'click' | 'intro';

export default function Home() {
  const [active, setActive] = useState(false)
  const [messageActive, setMessageActive] = useState(true)

  useEffect(() => {
    const tid = setInterval(() => {
      setMessageActive(false);
    }, 7000);
    return () => clearInterval(tid);
  }, []);

  useEffect(() => {
    const tid = setInterval(() => {
      setActive(true);
    }, 8000);
    return () => clearInterval(tid);
  }, []);

  const bleepsSettings: BleepsProviderSettings<BleepsNames> = {
    categories: {
      interaction: { volume: 0.75 },
      notification: { volume: 1 }
    },
    bleeps: {
      click: {
        category: 'interaction',
        sources: [
          { src: './sounds/click.webm', type: 'audio/webm' },
          { src: './sounds/click.mp3', type: 'audio/mpeg' }
        ]
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
      <Animator duration={{ enter: 2, interval: 10 }}>
        <BleepsOnAnimator<BleepsNames> transitions={{ entering: 'intro' }} />
        <div
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
        </div>
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
            <div style={{ position: 'relative', width: 300, height: 30,marginTop: 10, marginLeft: 10, marginRight: 10, marginBottom: 10 }}>
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
                style={{ position: 'relative', width: '95vw', height: '94vh', marginTop: 10 }}
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
                  <Animator duration={{ enter: 5 }} combine manager="sequence">
                    <Animator>
                      <Text>Greetings recruit,</Text>
                    </Animator>
                    <br />
                    <Animator>
                      <Text>We are please to announce that you have been selected to join the ranks of the Starfinder Society!</Text>
                    </Animator>
                    <br />
                    <Animator>
                      <Text>Your mission, should you choose to accept it, is to locate and secure the lost city of gold, rumored to be hidden somewhere in the uncharted reaches of the galaxy.</Text>
                    </Animator>
                    <br />
                    <Animator>
                      <Text>The city is said to be guarded by a powerful artifact known as the Starfinder Key, which is said to grant the holder unimaginable power.</Text>
                    </Animator>
                    <br />
                    <Animator>
                      <Text>The last known location of the key is said to be on the planet of Thalassa, a water-covered world known for its lush jungles and dangerous wildlife.</Text>
                    </Animator>
                    <br />
                    <Animator>
                      <Text>Your mission is to locate the key and bring it back to the Society.</Text>
                    </Animator>
                    <br />
                    <Animator>
                      <Text>Good luck, and may the stars guide you.</Text>
                    </Animator>                
                  </Animator>
                </div>
              </Animated>
            </div>
          </Animator>
        </div>
      </div>
    </BleepsProvider>
  );
}
