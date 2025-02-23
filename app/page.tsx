'use client';

import { Animated } from '@arwes/react-animated';
import { Animator } from '@arwes/react-animator';
import { Dots } from '@arwes/react-bgs';
import { FrameNefrex } from '@arwes/react-frames';
import { Text } from '@arwes/react-text'
import localFont from "next/font/local"; 

const aturesFont = localFont({
  src: './fonts/atures.ttf',
})

export default function Home() {
  return (
    <Animator active duration={{ enter: 2, exit: 2 }}>
      <div style={{
        position: 'absolute',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: -1
      }}>
        {/* Canvas element will ocupy the positioned parent element. */}

        <Animator>
          <div style={{ position: 'relative', width: 150, height: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
            <FrameNefrex
              style={{
                // @ts-expect-error css variables
                '--arwes-frames-bg-color': 'hsl(180, 75%, 10%)',
                '--arwes-frames-line-color': 'hsl(180, 75%, 30%)',
                '--arwes-frames-deco-color': 'hsl(180, 75%, 50%)'
              }}
            >
              
            </FrameNefrex>
            <Animator>
              <Text as="p" className={`text-decipher ${aturesFont.className}`} manager='decipher' fixed style={{ color: '#ddd', textAlign: 'center'}}>INCOMING COMMUNICATION</Text>
            </Animator>
          </div>
        </Animator>

        <Dots
          color='hsla(133, 100.00%, 16.30%, 0.50)'
        />

        {/* <div className={styles.page}>
          <main className={styles.main}>
            <Image
              className={styles.logo}
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />
            <ol>
              <li>
                Get started by editing <code>app/page.tsx</code>.
              </li>
              <li>Save and see your changes instantly.</li>
            </ol>

            <div className={styles.ctas}>
              <a
                className={styles.primary}
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className={styles.logo}
                  src="/vercel.svg"
                  alt="Vercel logomark"
                  width={20}
                  height={20}
                />
                Deploy now
              </a>
              <a
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondary}
              >
                Read our docs
              </a>
            </div>
          </main>

          <footer className={styles.footer}>
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/file.svg"
                alt="File icon"
                width={16}
                height={16}
              />
              Learn
            </a>
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/window.svg"
                alt="Window icon"
                width={16}
                height={16}
              />
              Examples
            </a>
            <a
              href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/globe.svg"
                alt="Globe icon"
                width={16}
                height={16}
              />
              Go to nextjs.org →
            </a>
          </footer>
        </div> */}
      </div>
    </Animator>
  );
}
