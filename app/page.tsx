'use client';

import { Animator } from '@arwes/react-animator';
import { Dots, GridLines, MovingLines } from '@arwes/react-bgs';
import { FrameNefrex } from '@arwes/react-frames';
import { Text } from '@arwes/react-text'
import localFont from "next/font/local";
import { type BleepsProviderSettings, BleepsProvider } from '@arwes/react-bleeps'
// import { ReactNode } from 'react';
import { BleepsOnAnimator } from '@arwes/react';

type BleepsNames = 'click' | 'intro';

// interface ButtonProps {
//   name: BleepsNames
//   children: ReactNode
// };

const bleepsSettings: BleepsProviderSettings<BleepsNames> = {
  categories: {
    background: { volume: 0.25 },
    transition: { volume: 0.5 },
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

const aturesFont = localFont({
  src: './fonts/atures.ttf',
})

export default function Home() {
  return (
    <BleepsProvider {...bleepsSettings}>
      <Animator active duration={{ enter: 1, interval: 10 }}>
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
          <div style={{ position: 'relative', width: 150, height: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
            <Animator>
              <FrameNefrex
                style={{
                  // @ts-expect-error css variables
                  '--arwes-frames-bg-color': 'hsl(180, 75%, 10%)',
                  '--arwes-frames-line-color': 'hsl(180, 75%, 30%)',
                  '--arwes-frames-deco-color': 'hsl(180, 75%, 50%)'
                }}
              />
              <BleepsOnAnimator<BleepsNames> transitions={{ entering: 'intro' }} />
              <Animator>
                <Text as="p" className={`text-decipher ${aturesFont.className}`} manager='decipher' fixed style={{ color: '#ddd', textAlign: 'center'}}>INCOMING COMMUNICATION</Text>                
              </Animator>            
            </Animator>
          </div>
          <GridLines lineColor="hsla(180, 100%, 75%, 0.05)" distance={30} />
          <Dots color="hsla(180, 100%, 75%, 0.05)" distance={30} />
          <MovingLines lineColor="hsla(180, 100%, 75%, 0.07)" distance={30} sets={20} />
        </div>
      </Animator>
    </BleepsProvider>
  );
}
