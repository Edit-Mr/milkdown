/* Copyright 2021, Milkdown by Mirone. */
import './style.css'

import * as Accordion from '@radix-ui/react-accordion'
import clsx from 'clsx'
import type { FC, RefObject } from 'react'
import pkgJson from '../../../../package.json'
import { useLinkClass } from '../../hooks/useLinkClass'
import type { CodemirrorProps, CodemirrorRef } from '../Codemirror'
import { Codemirror } from '../Codemirror'
import { AccordionItem } from './AccordionItem'

interface ControlPanelProps extends CodemirrorProps {
  codemirrorRef: RefObject<CodemirrorRef>
}

export const ControlPanel: FC<ControlPanelProps> = ({ content, onChange, lock, codemirrorRef }) => {
  const linkClass = useLinkClass()
  return (
    <div className="h-full">
      <div className="border-nord4 flex h-10 items-center justify-between border-b bg-gray-200 px-4 py-2 font-light dark:border-gray-600 dark:bg-gray-700">
        <div>
          <span>
            Milkdown Playground
          </span>
          <span className="ml-2 font-mono text-xs text-gray-600 dark:text-gray-300">
            v{pkgJson.version}
          </span>
        </div>
        <div>
          <button className={clsx(linkClass(false), 'flex h-8 w-8 items-center justify-center rounded-full')}>
            <span className="material-symbols-outlined text-base">share</span>
          </button>
        </div>
      </div>
      <Accordion.Root type="single" defaultValue="markdown" className="h-[calc(100%-2.5rem)]">
        <AccordionItem value="markdown" name="Markdown">
          <Codemirror ref={codemirrorRef} content={content} onChange={onChange} lock={lock} />
        </AccordionItem>
        <AccordionItem value="plugin" name="Plugins">
          TODO: add plugins list here
        </AccordionItem>
        <AccordionItem value="state" name="State">
          TODO: add prosemirror state here
        </AccordionItem>
      </Accordion.Root>
    </div>

  )
}
