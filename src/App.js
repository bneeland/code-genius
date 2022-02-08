import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

function Fragment(props) {
  return (
    <span
      onClick={props.onClick}
      className="bg-gray-200 py-0.5 px-0.5 rounded cursor-pointer hover:bg-sky-500 hover:text-white"
    >
      {props.text}
    </span>
  );
}

function Annotation(props) {
  return (
    <div className="sticky top-20 overflow-auto grid grid-cols-12 bg-gray-200 text-gray-800 p-4">
      <div className="col-span-11">
        {props.text}
      </div>
      <div className="text-right">
        <button
          onClick={props.onClick}
          className="rounded-full py-0 my-0 text-gray-500 p-1 hover:text-gray-800"
        >
          <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  )
}

function App() {
  const [activeAnnotation, setActiveAnnotation] = useState(null);

  return (
    <div>
      <div className="sticky top-0 p-4 mb-8 bg-white border border-b-gray-300 drop-shadow">
        <h1 className="text-2xl font-thin text-sky-500 cursor-default">Code Genius</h1>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-10">
          <div className="text-gray-800">
            <h1>5. Systems and equipment</h1>
            <p><b>5.1 Ventilation Air Distribution.</b> Ventilating systems shall be designed in accordance with the requirements of the following subsections.</p>
            <p><b>5.1.1 Designing for <Fragment text="Air Balancing" onClick={() => setActiveAnnotation(0)} />.</b> Ventilation air distribution systems shall be provided that allow field verfication of outdoor air intake flow (V_ot) during operation.</p>
            <Fragment text="First fragment" onClick={() => setActiveAnnotation(1)} />
            <p>The first human inhabitants of the Japanese archipelago have been traced to prehistoric times around 30,000 BCE. The Jōmon period, named after its cord-marked pottery, was followed by the Yayoi people in the first millennium BCE when new inventions were introduced from Asia. During this period, the first known written reference to Japan was recorded in the Chinese Book of Han in the first century CE.

Around the 4th century BCE, the Yayoi people from the continent immigrated to the Japanese archipelago and introduced iron technology and agricultural civilization.[1] Because they had an agricultural civilization, the population of the Yayoi began to grow rapidly and overwhelm the Jōmon people, natives of the Japanese archipelago who were hunter-gatherers.[2] Between the fourth to ninth century, Japan's many kingdoms and tribes gradually came to be unified under a centralized government, nominally controlled by the Emperor of Japan. The imperial dynasty established at this time continues to this day, albeit in an almost entirely ceremonial role. In 794, a new imperial capital was established at Heian-kyō (modern Kyoto), marking the beginning of the Heian period, which lasted until 1185. The Heian period is considered a golden age of classical Japanese culture. Japanese religious life from this time and onwards was a mix of native Shinto practices and Buddhism.

Over the following centuries, the power of the imperial house decreased, passing first to great clans of civilian aristocrats – most notably the Fujiwara – and then to the military clans and their armies of samurai. The Minamoto clan under Minamoto no Yoritomo emerged victorious from the Genpei War of 1180–85, defeating their rival military clan, the Taira. After seizing power, Yoritomo set up his capital in Kamakura and took the title of shōgun. In 1274 and 1281, the Kamakura shogunate withstood two Mongol invasions, but in 1333 it was toppled by a rival claimant to the shogunate, ushering in the Muromachi period. During this period, regional warlords called daimyō grew in power at the expense of the shōgun. Eventually, Japan descended into a period of civil war. Over the course of the late 16th century, Japan was reunified under the leadership of the prominent daimyō Oda Nobunaga and his successor, Toyotomi Hideyoshi. After Toyotomi's death in 1598, Tokugawa Ieyasu came to power and was appointed shōgun by the emperor. The Tokugawa shogunate, which governed from Edo (modern Tokyo), presided over a prosperous and peaceful era known as the Edo period (1600–1868). The Tokugawa shogunate imposed a strict class system on Japanese society and cut off almost all contact with the outside world.

Portugal and Japan came into contact in 1543, when the Portuguese became the first Europeans to reach Japan by landing in the southern archipelago. They had a significant impact on Japan, even in this initial limited interaction, introducing firearms to Japanese warfare. The American Perry Expedition in 1853–54 more completely ended Japan's seclusion; this contributed to the fall of the shogunate and the return of power to the emperor during the Boshin War in 1868. The new national leadership of the following Meiji period transformed the isolated feudal island country into an empire that closely followed Western models and became a great power. Although democracy developed and modern civilian culture prospered during the Taishō period (1912–26), Japan's powerful military had great autonomy and overruled Japan's civilian leaders in the 1920s and 1930s. The Japanese military invaded Manchuria in 1931, and from 1937 the conflict escalated into a prolonged war with China. Japan's attack on Pearl Harbor in 1941 led to war with the United States and its allies. Japan's forces soon became overextended, but the military held out in spite of Allied air attacks that inflicted severe damage on population centers. Emperor Hirohito announced Japan's surrender on 15 August 1945, following the atomic bombings of Hiroshima and Nagasaki and the Soviet invasion of Manchuria.

The Allies occupied Japan until 1952, during which a new constitution was enacted in 1947 that transformed Japan into a constitutional monarchy. After 1955, Japan enjoyed very high economic growth under the governance of the Liberal Democratic Party, and became a world economic powerhouse. Since the Lost Decade of the 1990s, economic growth has slowed. On 11 March 2011, Japan suffered from a magnitude 9.0 earthquake and tsunami, one of the most powerful earthquakes ever recorded, which killed almost 20,000 people and caused the serious Fukushima Daiichi nuclear disaster.</p>
          </div>
          {activeAnnotation != null && <div>
            {activeAnnotation === 0 && <Annotation text="Air balancing is the process by which a technician (called an air balancer) adjusts dampers and fan speeds to achieve the air flows specified in the design drawings and specifications." onClick={() => setActiveAnnotation(null)} />}
            {activeAnnotation === 1 && <Annotation text="This is text in the first annotation component." onClick={() => setActiveAnnotation(null)} />}
          </div>}
        </div>
      </div>
    </div>
  );
}

export default App;
