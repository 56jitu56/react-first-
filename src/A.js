import React, { useState } from 'react'
import B from './B';

export default function A() {
  const [news1, setNews1] = useState("Good morning! ");
  const [news2, setNews2] = useState("How are you?")
  const [news3, setNews3] = useState("What’s your name?")
  const [news4, setNews4] = useState("Where are you from?")
  const [news5, setNews5] = useState("Can I help you?")
  const [news6, setNews6] = useState("Nice to meet you.")
  const [news7, setNews7] = useState("Sorry, I’m late.")
  const [news8, setNews8] = useState("Thank you.")
  const [news9, setNews9] = useState("Excuse me")
  const [news10, setNews10] = useState("Please, give me that.")
  const [news11, setNews11] = useState("I don’t understand.")
  const [news12, setNews12] = useState("Could you repeat that, please?")
  const [news13, setNews13] = useState("How’s the weather today?")
  const [news14, setNews14] = useState("What time is it?")
  const [news15, setNews15] = useState("Have a great day!")
  const [news16, setNews16] = useState("See you later.")
  const [news17, setNews17] = useState("What’s for dinner?")
  const [news18, setNews18] = useState("I’m hungry.")
  const [news19, setNews19] = useState("I’m tired.")
  const [news20, setNews20] = useState("Where is the restroom?")
  const [news21, setNews21] = useState("Can I have a glass of water?")
  const [news22, setNews22] = useState("Do you need any help?")
  const [news23, setNews23] = useState("How was your day?")
  const [news24, setNews24] = useState("I love you")
  const [news25, setNews25] = useState("Take care.")
  const [news26, setNews26] = useState("Goodbye")
  return (
    <>
      {/* use  */}
      {/* <h1>{news1}</h1>
      <h1>{news2}</h1> */}
      <h1>1. {news1}</h1>
      <button type="button" onClick={() => setNews1("done")}>a</button>
      <h1>2. {news2}</h1>
      <button type="button" onClick={() => setNews2("done")}>b</button>
      <h1>3.{news3}</h1>
      <button type='button' onClick={() => setNews3("done")}>c</button>
      <h1>4.{news4}</h1>
      <button type='button' onClick={() => setNews4("done")}>d</button>
      <h1>5.{news5}</h1>
      <button type='button' onClick={() => setNews5("done")}>e</button>
      <h1>6.{news6}</h1>
      <button type='button' onClick={() => setNews6("done")}>f</button >
      <h1>7.{news7}</h1>
      <button type='button' onClick={() => setNews7("done")}>g</button>
      <h1>8.{news8}</h1>
      <button type='button' onClick={() => setNews8("done")} >h</button>
      <h1>9.{news9}</h1>
      <button type='button' onClick={() => setNews9("done")}>i</button>
      <h1>10.{news10}</h1>
      <button type='button' onClick={() => setNews10("done")}>j</button>
      <h1>11.{news11}</h1>
      <button type='button' onClick={() => setNews11("done")}>k</button>
      <h1>12.{news12}</h1>
      <button type='button' onClick={() => setNews12("done")}>l</button>
      <h1>13.{news13}</h1>
      <button type='button' onClick={() => setNews13("done")}>m</button>
      <h1>14. {news14}</h1>
      <button type='button' onClick={() => setNews14("done")}>n</button>
      <h1>15. {news15}</h1>
      <button type='button' noClick={() => setNews15("done")}>m</button>
      <h1>16 {news16}</h1>
      <button type='button' onClick={() => setNews16("done")}>o</button>
      <h1>17.{news17}</h1>
      <button type='button' onClick={() => setNews17("done")}>p</button>
      <h1>18.{news18}</h1>
      <button type='button' onClick={() => setNews18("done")}>q</button>
      <h1>19.{news19}</h1>
      <button type='button' onClick={() => setNews19("done")}>r</button>
      <h1>20.{news20}</h1>
      <button type='button' onClick={() => setNews20("done")} >s</button>
      <h1>21.{news21}</h1>
      <button type='button' onClick={() => setNews21("done")}>t</button>
      <h1>22.{news22}</h1>
      <button type='button' onClick={() => setNews22("done")}>u</button>
      <h1>23.{news23}</h1>
      <button type='button' onClick={() => setNews23("done")}>v</button>
      <h1>24.{news24}</h1>
      <button type='button' onClick={() => setNews24("done")}>w</button>
      <h1>25.{news25}</h1>
      <button type='button' onClick={() => setNews25("done")}>x</button>
      <h1>26.{news26}</h1>
      <button type='button' onClick={() => setNews26("done")}>z</button>
      <B Bb={news1} />



    </>
  )
}
