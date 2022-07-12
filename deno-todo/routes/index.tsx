/** @jsx h */
import { h } from 'preact'
import { tw } from '@twind'
import Counter from '../islands/Counter.tsx'
import TodoList from '../islands/TodoList.tsx'

export default function Home() {
  return (
    <div>
      <div
        class={tw` bg-yellow-300 flex flex-col justify-center w-full h-screen`}
      >
        <div
          class={tw`container mx-auto max-w-screen-sm bg-white p-4 rounded shadow-2xl`}
        >
          <img
            src="/logo.svg"
            width="100px"
            height="100px"
            class={tw`mx-auto block`}
            alt="the fresh logo: a sliced lemon dripping with juice"
          />
          <h1
            class={tw`text-3xl font-bold uppercase text-black mb-4 text-center`}
          >
            Fresh Todo List
          </h1>
          <TodoList />
        </div>
      </div>
    </div>
  )
}
