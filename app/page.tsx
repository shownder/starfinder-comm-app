'use client';

import { Animator } from '@arwes/react-animator';
import { Dots, GridLines, MovingLines } from '@arwes/react-bgs';
import { FrameNefrex } from '@arwes/react-frames';
import { Text } from '@arwes/react-text'
import { Orbitron } from 'next/font/google'
import { useBleeps, type BleepsProviderSettings } from '@arwes/react-bleeps'
import { BleepsProvider } from '@arwes/react-bleeps'
import { BleepsOnAnimator } from '@arwes/react-core'
import { ReactNode } from 'react';

const orbitron = Orbitron({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})

type BleepsNames = 'click' | 'intro';

type ButtonProps = {
  children: ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = (props: ButtonProps): JSX.Element => {
  const { children } = props
  const bleeps = useBleeps<BleepsNames>()
  const clicking = (): void => {
    bleeps['click']?.play()
    console.log("Clicked")
  }
  return <button className='messageButton' style={{ backgroundColor: 'transparent', border: 'none' }} onClick={clicking}>{children}</button>
}

export default function Home() {
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
          <div style={{ position: 'relative', width: 180, height: 120, display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
              <Button>
                <Animator duration={{ enter: 2 }}>
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
                  <BleepsOnAnimator<BleepsNames> transitions={{ entered: 'intro' }} />
                    <Text as="p" className={`text-decipher ${orbitron.className}`} manager='decipher' fixed style={{ color: '#ddd', textAlign: 'center', fontWeight: '900'}}>
                      INCOMING COMMUNICATION
                    </Text>
                  </Animator>
                </Animator>
              </Button>                     
          </div>
          <GridLines lineColor="hsla(180, 100%, 75%, 0.05)" distance={30} />
          <Dots color="hsla(180, 100%, 75%, 0.05)" distance={30} />
          <MovingLines lineColor="hsla(180, 100%, 75%, 0.07)" distance={30} sets={20} />
        </div>
      </Animator>
    </BleepsProvider>
  );
}
