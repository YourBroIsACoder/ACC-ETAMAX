/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Skull, Clock, Lock, Terminal, Eye, MapPin, AlertTriangle, ChevronRight, Binary, FileText, Ghost, Flame, Zap, Shield, BookOpen, Star, Trophy, Users, Hash, Cpu } from 'lucide-react';
import { verifyFlag } from './actions';

/**
 * AGNEL CYBER CELL - CIPHER TRAIL EVENT
 * 
 * TOURNAMENT STRUCTURE:
 * Total Teams: 15 (divided into 3 groups of 5 teams each)
 * 
 * Phase 1: Group Stage (Parallel Paths)
 * - Round 1: 5 teams per group → 1 eliminated → 4 remain (12 total)
 * - Round 2: 4 teams per group → 1 eliminated → 3 remain (9 total)
 * - Round 3: 3 teams per group → 2 eliminated → 1 remains (3 total)
 * 
 * Phase 2: Convergence (Single Path)
 * - Round 4 (Semi-Finals): 3 teams → 1 eliminated → 2 remain
 * - Round 5 (Grand Finale): 2 teams → 1 eliminated → 1 WINNER
 */

// Group assignment: Team IDs 1-5 = Group A, 6-10 = Group B, 11-15 = Group C
const getGroupFromTeamId = (teamId: number): string => {
  if (teamId >= 1 && teamId <= 5) return 'A';
  if (teamId >= 6 && teamId <= 10) return 'B';
  if (teamId >= 11 && teamId <= 15) return 'C';
  return 'INVALID';
};

// GAME DATA - Campus hunt with encrypted riddles
// Flow: Encrypted Riddle → Decode → Find Location → Get Leetspeak Key → Enter Key
// GAME DATA - Campus hunt with encrypted riddles
// Flow: Encrypted Riddle → Decode → Find Location → Get Leetspeak Key → Enter Key
// NOTE: Answers are now validated server-side
const GAME_DATA = {
  // ROUND 1: First location hunt
  round1: {
    groupA: {
      id: 1,
      type: 'physical',
      title: 'Round 1: Decode & Hunt',
      // CAESAR CIPHER (Shift +3)
      riddle: "Wzr qlqhv vlw rq pb vnln, vlgh eb vlgh, D grxeoh pluurxu brx fdq’w glylgh. L vwdqg zkhuh kxqjhu phhwv lwv fxuh, Zdwfklqj vqdfn uxqv, orxg dqg vxuh.",
      cipherType: "CAESAR (+3)",
      hints: [
        "The answer is definitely in the library basement. We hid it under the third step. Trust me bro. 📚❌",
        "Try multiplying the cipher by Pi. Then divide by your team's average IQ. Should give you something. 🥧🧮",
        "This riddle uses ROT47, not Caesar. Wait, maybe it's Atbash? Actually, just give up. 😈"
      ],
      location: "TREE99",
      timer: 900
    },
    groupB: {
      id: 1,
      type: 'physical',
      title: 'Round 1: Decode & Hunt',
      // REVERSE WORDS
      riddle: "tsomlA flah a derdnuh dehctE otni niks. raeN enots htiaf dna detfarc serutuf, I dnats neewteb reyarp dna ecitcarp.",
      cipherType: "REVERSE WORDS",
      hints: [
        "The QR code on the main gate has a clue. Scan it 12 times for the answer. No, seriously. 📱🚫",
        "Count every window on the third floor. The number is the answer. You're welcome. 🪟❌",
        "It's obviously near the water fountain. The one that doesn't exist anymore. Good luck! ⛲️🤡"
      ],
      location: "TREE48",
      timer: 900
    },
    groupC: {
      id: 1,
      type: 'physical',
      title: 'Round 1: Decode & Hunt',
      // MORSE CODE
      riddle: ".- -.-. .. .-. -.-. .-.. . / -.. .-. .- --. --. .. -. --. / .- / - .- .. .-.. / --- -. / -... .- .-. -.- --..-- / -. . .- .-. / - .... . / .... --- ... - . .-.. / .-- .... . .-. . / . -.-- . ... / --- ..-. - . -. / .--. .- .-. -.- .-.-.-",
      cipherType: "MORSE",
      hints: [
        "Check the principal's office. The password is written on his desk calendar. Just walk in! 🚪👔",
        "This uses Binary code, not Morse. Convert each dot to 1 and dash to 0. Easy peasy. 010101❌",
        "The answer is literally TREE80. Just kidding. Or am I? Try it. Waste your attempt. 🌲😂"
      ],
      location: "TREE80",
      timer: 900
    }
  },

  // ROUND 2: Second location
  round2: {
    groupA: {
      id: 2,
      type: 'physical',
      title: 'Round 2: Decode & Hunt',
      // HEXADECIMAL
      riddle: "57 68 65 72 65 20 73 6d 61 6c 6c 20 70 72 61 79 65 72 73 20 61 6e 64 20 6c 61 75 67 68 74 65 72 20 67 72 6f 77 2c 0a 57 6f 6f 64 20 61 6e 64 20 67 6c 61 73 73 20 69 6e 20 71 75 69 65 74 20 73 68 6f 77 2e 0a 4e 6f 74 20 66 75 6c 6c 79 20 63 6c 6f 73 65 64 2c 20 6e 6f 74 20 66 75 6c 6c 79 20 66 72 65 65 e2 80 94 0a 41 20 63 72 61 63 6b 65 64 20 6f 6c 64 20 64 6f 6f 72 20 69 73 20 77 68 65 72 65 20 49 e2 80 99 6c 6c 20 62 65 2e",
      cipherType: "HEXADECIMAL",
      hints: [
        "Look for the red door on the second floor. Near the chemistry lab. It's definitely there. 🚪🔴",
        "Each hex pair represents a Pokemon. Gotta catch 'em all to decode. Pikachu = 25. ⚡🎮",
        "Actually, this is Octal, not Hexadecimal. We lied in the cipher type. Convert accordingly. 8️⃣❌"
      ],
      location: "BROKENDOOR",
      timer: 900
    },
    groupB: {
      id: 2,
      type: 'physical',
      title: 'Round 2: Decode & Hunt',
      // BINARY
      riddle: "01000001 00100000 01110010 01101111 01110111 00100000 01101111 01100110 00100000 01101101 01100101 01110100 01100001 01101100 00100000 01101100 01110101 01101110 01100111 01110011 00101100 00100000 01000010 01110010 01100101 01100001 01110100 01101000 01101001 01101110 01100111 00100000 01100110 01101111 01110010 00100000 01101111 01110100 01101000 01100101 01110010 01110011 00101110 00100000 01001000 01110101 01100111 01100111 01101001 01101110 01100111 00100000 01110100 01101000 01100101 00100000 01110111 01100001 01101100 01101100 00100000 01100010 01111001 00100000 01110100 01101000 01100101 00100000 01100111 01101001 01110010 01101100 01110011 00100111 00100000 01110111 01100001 01111001 00100000 01101001 01101110 00101110",
      cipherType: "BINARY",
      hints: [
        "The staff room has a fan. That's your answer. Go ask the teachers for permission first. 🪭👨‍🏫",
        "Convert binary to hexadecimal first, then to ASCII. It's a double conversion. Obviously. 🔄🔢",
        "Boys entrance AC unit #3. That's where the flag is. We swapped them for fun. 🚹❌"
      ],
      location: "GIRLSENTRANCEAC",
      timer: 900
    },
    groupC: {
      id: 2,
      type: 'physical',
      title: 'Round 2: Decode & Hunt',
      // BASE64
      riddle: "U3RvcmllcyBkYW5jZSBvbiBteSBza2luCldpdGhvdXQgbW92aW5nLgpJIHNwZWFrIGluIHRyaWJlcywKTm90IHdvcmRzLgpMYXcgd2F0Y2hlcyBtZSBmcm9tIGFjcm9zcy4=",
      cipherType: "BASE64",
      hints: [
        "There's graffiti in the boys' washroom with cave paintings. Check stall #2. Flag is there. 🚽🎨",
        "This is actually Base32. We typo'd. Decode with Base32 algorithm. Don't @ us. 3️⃣2️⃣",
        "The canteen menu has tribal art. Order a samosa and ask the uncle. He knows. 🍛❌"
      ],
      location: "WARLI",
      timer: 900
    }
  },

  // ROUND 3: Third location
  round3: {
    groupA: {
      id: 3,
      type: 'physical',
      title: 'Round 3: Decode & Hunt',
      // BASE64
      riddle: "SSBob2xkIHRoZSBza3kgYnV0IG5ldmVyIHJhaW4sClBhaW50ZWQgYmx1ZSB5ZXQgZHJ5IEkgcmVtYWluLgpObyBzcGxhc2gsIG5vIHdhdmUsIG5vIHN3aW1tZXI6cyBjYWxsLApTdGlsbCBJ4oCZbSBhIHBvb2wsIHJvdW5kIGFuZCBzbWFsbC4KQmVzaWRlIGEgcm95YWwgYmlyZCBpbiB3aGl0ZSBJIHN0YXkg4oCUCkZpbmQgdGhlIGVtcHR5IGJsdWUsIHlvdXLigJlyZSBvbiB0aGUgd2F5Lg==",
      cipherType: "BASE64",
      hints: [
        "The swimming pool behind the gym. Wait, there is no gym. Maybe there is? Go check. 🏊‍♂️🏋️",
        "Look for a duck statue, not a swan. We changed it last minute. Check the garden. 🦆❌",
        "Actually this uses URL encoding. Decode it as %20%65%etc. Base64 was yesterday. 🌐🔗"
      ],
      location: "WATERPOOL",
      timer: 900
    },
    groupB: {
      id: 3,
      type: 'physical',
      title: 'Round 3: Decode & Hunt',
      // ROT13
      riddle: "V'z gur svefg grfg orsber lbh cnff, N gval ebbz jurer fgenatref ner nfxrq. V qba'g fghql, lrg V xabj rirel snpr, V fvg ng gur rqtr bs gur pnzchf fcnpr.",
      cipherType: "ROT13",
      hints: [
        "Security guard's bicycle seat has the code engraved. Ask him to borrow it. 🚲🔐",
        "ROT26 actually. Rotate the alphabet twice. Trust the process. It's math. 🔢♾️",
        "The janitor's closet near the auditorium. The mop has the flag tied to it. 🧹🚪"
      ],
      location: "WATCHMANCABIN",
      timer: 900
    },
    groupC: {
      id: 3,
      type: 'physical',
      title: 'Round 3: Decode & Hunt',
      // REVERSE ENTIRE
      riddle: ".uoy rof stiaw eert yratilos A —eueuq eht morf yawa ,lla ti dniheB .eeffoc fo llems eht drawot klaW ,eerps ysion s’reyof eht evaeL",
      cipherType: "REVERSE",
      hints: [
        "In front of the noise, actually. We put it where everyone can see. Main entrance tree. 🔊🌳",
        "Mirror the text vertically, not horizontally. Then squint really hard. 🪞👁️",
        "It's the tree behind the placement office. Or was it the accounts office? One of those. 🏢❓"
      ],
      location: "TREE_BEHIND_FOYER",
      timer: 900
    }
  },

  // ROUND 4: Semi-Finals (Top 3 teams - all groups merged)
  round4: {
    id: 4,
    type: 'physical',
    title: 'Semi-Finals: The Crowned One',
    // VIGENERE (Key: KIRA)
    riddle: "Xwk a ptrg, imk I'w bzen cg hsoy, A piuen zzblwe trik fyzxod bf fvg. Sy dpv cycet dprt pwclyej rysl, I ptltdmi fyz khyav wrw eodqte curlv byixoj. Fsvu trm tlyby trik crwje dw jtkg — Kho vvxd vlmlmi apbvr bwbu cpfwc bye gip",
    cipherType: "VIGENERE (Key: KIRA)",
    hints: [
      "Check the electricity pole near the parking lot. Climb it if you're brave. ⚡🧗",
      "Tree 9 is mislabeled as Tree 7. Classic admin error. Count from the left. 9️⃣❌",
      "Vigenere key is 'LIGHT' not KIRA hahahahahah. We're testing if you pay attention. Use LIGHT. 💡🔑"
    ],
    location: "POLE_TREE_7",
    timer: 900
  },

  // ROUND 5: Grand Finale (Final 2 teams)
  round5: {
    id: 5,
    type: 'physical',
    title: 'Grand Finale: The Final Truth',
    // MORSE + CAESAR: Plain → Caesar(+7) → Morse Code
    riddle: "--... / .--. - / --.. - .... ... ... / .. -... .- / -- .-.. ..- .--- .-.. -.- / ... .--. .-. ..-. / .--. - / -. -.-- .... ..- -.- / .... / .-.. . .... -- ..-. / .--- -... ... -.- / .--. ..- / .... / ... .-.. .... -.-- ..- .--. ..- -. / ... ..- ..- -.. / .. .-.. --.. .--. -.- .-.. / .- --- .-.. / --- .. ... ... --.. / -.. --- .-.. -.-- .-.. / -.- .--. ... ...- - .... ..-. --.. / -. -.-- ...- -.. / .--. / -.-- .--. --.. .-.. / -... .-- / -.. -... .--. .-.. / --.. ...- -.. / .... ..- -.. / --.. ...- -.. / ... .-.. -- .- / .. .-.. -- .- .--. ..- -.- / .- --- .-.. / .. -... .--. ... -.. .--. ..- -. / .- --- .... .... / -. -.-- .... ..- .... .-.. -.- / .- --- .-.. / --.. .--- .-. ... ... / -- .--. ..- -.. / -... .-.. / .--. ..- / .... / - .-.. .- .-.. ... / .. ... -.. ...",
    cipherType: "MORSE + CAESAR",
    cipherSteps: ["CAESAR_7", "MORSE"],
    hints: [
      "There's a wooden bowl in the library garden. Has potpourri in it. Smell it for clues. 🌺🥣",
      "Mechanical building, not Polytechnic. They're basically the same. Check the terrace. 🏗️❌",
      "It's actually Base64 → Caesar(+3) → Reverse. We listed them backwards. Figure it out. 🔄😈"
    ],
    location: "POLYTECHNIC_BASKET",
    timer: 900
  }
};

// Cipher decoder helper functions
const CIPHER_DECODERS = {
  ROT13: (text) => {
    return text.replace(/[a-zA-Z]/g, char => {
      const start = char <= 'Z' ? 65 : 97;
      return String.fromCharCode(((char.charCodeAt(0) - start + 13) % 26) + start);
    });
  },

  MORSE: (morse) => {
    const morseCode = {
      '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E',
      '..-.': 'F', '--.': 'G', '....': 'H', '..': 'I', '.---': 'J',
      '-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O',
      '.--.': 'P', '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T',
      '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X', '-.--': 'Y',
      '--..': 'Z', '/': ' '
    };
    return morse.split(' ').map(code => morseCode[code] || '').join('');
  },

  BINARY: (binary) => {
    return binary.split(' ').map(bin => String.fromCharCode(parseInt(bin, 2))).join('');
  },

  HEXADECIMAL: (hex) => {
    return hex.split(' ').map(h => String.fromCharCode(parseInt(h, 16))).join('');
  },

  ATBASH: (text) => {
    return text.replace(/[a-zA-Z]/g, char => {
      const isUpper = char === char.toUpperCase();
      const start = isUpper ? 65 : 97;
      return String.fromCharCode(25 - (char.charCodeAt(0) - start) + start);
    });
  },

  VIGENERE: (text, key) => {
    // Vigenere decode implementation
    let result = '';
    let keyIndex = 0;
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (/[a-zA-Z]/.test(char)) {
        const isUpper = char === char.toUpperCase();
        const charCode = char.charCodeAt(0) - (isUpper ? 65 : 97);
        const keyChar = key[keyIndex % key.length].toUpperCase();
        const keyCode = keyChar.charCodeAt(0) - 65;
        const decoded = (charCode - keyCode + 26) % 26;
        result += String.fromCharCode(decoded + (isUpper ? 65 : 97));
        keyIndex++;
      } else {
        result += char;
      }
    }
    return result;
  }
};



// Components
const GlitchText = ({ text, className = "" }: { text: string; className?: string }) => {
  return (
    <h1 className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      <span className="absolute top-0 left-0 -ml-0.5 -mt-0.5 text-red-500 opacity-70 animate-pulse">{text}</span>
      <span className="absolute top-0 left-0 ml-0.5 mt-0.5 text-cyan-500 opacity-70 animate-pulse">{text}</span>
    </h1>
  );
};

const CharacterCard = ({ image, name, description, icon: Icon }: { image?: string; name: string; description: string; icon?: React.ElementType }) => (
  <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg p-6 hover:border-red-900 transition-all hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] group">
    <div className="flex items-center space-x-4">
      {/* Priority: Show image if provided, otherwise fallback to Icon */}
      {image ? (
        <div className="relative shrink-0">
          <div className="absolute inset-0 bg-red-600 blur-md opacity-20 group-hover:opacity-50 transition-opacity"></div>
          <img
            src={image}
            alt={name}
            className="relative w-16 h-16 rounded-full object-cover border-2 border-red-600"
          />
        </div>
      ) : (
        Icon && (
          <div className="w-16 h-16 rounded-full bg-red-950/50 border-2 border-red-600 flex items-center justify-center shrink-0">
            <Icon className="w-8 h-8 text-red-500" />
          </div>
        )
      )}
      <div className="min-w-0">
        <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition truncate">{name}</h3>
        <p className="text-gray-400 text-sm truncate">{description}</p>
      </div>
    </div>
  </div>
);

const StatBox = ({ label, value, icon: Icon, color }: { label: string; value: string | number; icon?: React.ElementType; color: string }) => (
  <div className={`p-4 rounded-lg border ${color} bg-black/50 backdrop-blur-sm`}>
    <div className="flex items-center gap-2 mb-2">
      {Icon && <Icon className={`w-4 h-4 ${color.replace('border-', 'text-')}`} />}
      <span className="text-xs uppercase text-gray-400">{label}</span>
    </div>
    <div className={`text-2xl font-bold ${color.replace('border-', 'text-')}`}>{value}</div>
  </div>
);

const Timer = ({ initialTime, onExpire }: { initialTime: number; onExpire: () => void }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft <= 0) {
      onExpire();
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, onExpire]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex items-center space-x-2 text-red-600 font-mono text-2xl animate-pulse">
      <Clock className="w-6 h-6" />
      <span>{formatTime(timeLeft)}</span>
    </div>
  );
};

// Main App
export default function App() {
  const [gameState, setGameState] = useState('loading');
  const audioRef = useRef<HTMLAudioElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoStarted, setVideoStarted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [teamName, setTeamName] = useState('');
  const [teamId, setTeamId] = useState('');
  const [round, setRound] = useState(1);
  const [group, setGroup] = useState('');
  const [puzzleIndex, setPuzzleIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [screenGlitch, setScreenGlitch] = useState(false); // For wrong answer glitch effect
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes timer
  const [isDisqualified, setIsDisqualified] = useState(false);
  const [readyForRound, setReadyForRound] = useState(true); // true for first round
  const [showHint, setShowHint] = useState(false); // For super misleading hints
  const [currentHintIndex, setCurrentHintIndex] = useState(0); // Track which hint is shown

  useEffect(() => {
    const timer = setTimeout(() => {
      setGameState('intro');
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Timer countdown effect - runs when playing
  useEffect(() => {
    if (gameState !== 'playing') return;

    if (timeLeft <= 0) {
      // TIME'S UP - DISQUALIFIED!
      setIsDisqualified(true);
      setTimeout(() => {
        setGameState('disqualified');
      }, 3000); // Show red flash for 3 seconds
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState, timeLeft]);

  // Three.js Background Setup (only runs when on home screen)
  useEffect(() => {
    if (gameState !== 'home') return;

    const canvas = document.getElementById('three-canvas') as HTMLCanvasElement;
    if (!canvas) return;

    // Dynamically import Three.js to avoid SSR issues
    import('three').then((THREE) => {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      camera.position.z = 50;

      // Create floating geometric shapes
      const geometries = [
        new THREE.OctahedronGeometry(1.5),
        new THREE.TetrahedronGeometry(1.2),
        new THREE.IcosahedronGeometry(1),
        new THREE.BoxGeometry(1.5, 1.5, 1.5),
      ];

      const material = new THREE.MeshPhongMaterial({
        color: 0xdc2626,
        emissive: 0x7f1d1d,
        shininess: 100,
        transparent: true,
        opacity: 0.6,
        wireframe: true
      });

      const shapes: THREE.Mesh[] = [];
      for (let i = 0; i < 15; i++) {
        const geometry = geometries[Math.floor(Math.random() * geometries.length)];
        const mesh = new THREE.Mesh(geometry, material);

        mesh.position.x = (Math.random() - 0.5) * 100;
        mesh.position.y = (Math.random() - 0.5) * 100;
        mesh.position.z = (Math.random() - 0.5) * 100;

        mesh.rotation.x = Math.random() * Math.PI;
        mesh.rotation.y = Math.random() * Math.PI;

        mesh.userData = {
          speedX: (Math.random() - 0.5) * 0.002,
          speedY: (Math.random() - 0.5) * 0.002,
          rotationSpeed: (Math.random() - 0.5) * 0.01
        };

        scene.add(mesh);
        shapes.push(mesh);
      }

      // Particle system
      const particleGeometry = new THREE.BufferGeometry();
      const particleCount = 200;
      const positions = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 200;
      }

      particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const particleMaterial = new THREE.PointsMaterial({
        color: 0xff0000,
        size: 0.5,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending
      });

      const particles = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(particles);

      // Lighting
      const ambientLight = new THREE.AmbientLight(0x404040, 1);
      scene.add(ambientLight);

      const pointLight = new THREE.PointLight(0xff0000, 2, 100);
      pointLight.position.set(0, 0, 30);
      scene.add(pointLight);

      const pointLight2 = new THREE.PointLight(0xdc2626, 1.5, 100);
      pointLight2.position.set(-30, 20, 20);
      scene.add(pointLight2);

      // Animation loop
      let mouseX = 0;
      let mouseY = 0;
      let animationId: number;

      const onMouseMove = (event: MouseEvent) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      };
      window.addEventListener('mousemove', onMouseMove);

      const animate = () => {
        animationId = requestAnimationFrame(animate);

        // Rotate and move shapes
        shapes.forEach(shape => {
          shape.rotation.x += shape.userData.rotationSpeed;
          shape.rotation.y += shape.userData.rotationSpeed * 0.7;

          shape.position.x += shape.userData.speedX;
          shape.position.y += shape.userData.speedY;

          if (Math.abs(shape.position.x) > 50) shape.userData.speedX *= -1;
          if (Math.abs(shape.position.y) > 50) shape.userData.speedY *= -1;
        });

        // Rotate particle system
        particles.rotation.y += 0.0005;
        particles.rotation.x += 0.0002;

        // Camera parallax with mouse
        camera.position.x += (mouseX * 5 - camera.position.x) * 0.05;
        camera.position.y += (mouseY * 5 - camera.position.y) * 0.05;
        camera.lookAt(scene.position);

        renderer.render(scene, camera);
      };
      animate();

      // Handle resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener('resize', handleResize);

      // Cleanup function
      return () => {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationId);
        renderer.dispose();
        scene.clear();
      };
    }).catch(err => {
      console.error('Three.js failed to load:', err);
    });
  }, [gameState]);

  const playIntroVideo = () => {
    if (videoRef.current) {
      setVideoStarted(true);
      videoRef.current.play().catch(err => {
        console.error('Video autoplay failed:', err);
        setGameState('home');
      });
    }
  };

  const skipIntro = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setGameState('home');
  };

  const handleVideoEnd = () => {
    setGameState('home');
  };

  const handleStart = () => {
    if (!teamName.trim() || !teamId.trim()) {
      alert('Please enter both team name and team ID!');
      return;
    }

    const id = parseInt(teamId);
    if (isNaN(id) || id < 1 || id > 15) {
      alert('Team ID must be between 1 and 15!');
      return;
    }

    const assignedGroup = getGroupFromTeamId(id);
    if (assignedGroup === 'INVALID') {
      alert('Invalid Team ID!');
      return;
    }

    setGroup(assignedGroup);
    setGameState('playing');
  };

  const getCurrentPuzzle = () => {
    if (round <= 3) {
      // Group-specific rounds
      const roundKey = `round${round}` as keyof typeof GAME_DATA;
      const groupKey = `group${group}` as keyof typeof GAME_DATA[typeof roundKey];
      return GAME_DATA[roundKey]?.[groupKey];
    } else if (round === 4) {
      return GAME_DATA.round4;
    } else if (round === 5) {
      return GAME_DATA.round5;
    }
    return null;
  };

  const handleSubmitAnswer = async () => {
    const puzzle = getCurrentPuzzle();
    if (!puzzle) return;

    // Server-side verification
    const result = await verifyFlag(group, round, answer);

    if (result.success) {
      setWrongAnswer(false);
      setScore(score + 100);
      setAnswer('');
      setShowHint(false); // Hide hint for next round
      setCurrentHintIndex(0); // Reset to first hint

      // Progress to next round
      if (round < 5) {
        setIsTransitioning(true);
        setTimeout(() => {
          setRound(round + 1);
          setTimeLeft(900); // Reset timer for new round
          setReadyForRound(false); // Show "Start Round" button
          setIsTransitioning(false);
        }, 2000);
      } else {
        setGameState('victory');
      }
    } else {
      // PENALTY LOGIC: -2 Minutes
      setWrongAnswer(true);
      setScreenGlitch(true); // Trigger glitch effect

      // Reduce timer by 2 minutes (120 seconds), but don't go below 0
      setTimeLeft(prev => Math.max(0, prev - 120));

      setTimeout(() => {
        setWrongAnswer(false);
        setScreenGlitch(false);
      }, 2000);
    }
  };

  // Loading State
  if (gameState === 'loading') {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center space-y-6">
          <Skull className="w-24 h-24 text-red-600 mx-auto animate-pulse" />
          <div className="text-2xl text-white font-bold animate-pulse">Loading...</div>
        </div>
      </div>
    );
  }

  // Intro Video
  if (gameState === 'intro') {
    return (
      <div className="fixed inset-0 bg-black z-50">
        <video
          ref={videoRef}
          src="/intro.mp4"
          className="w-full h-full object-cover"
          onEnded={handleVideoEnd}
          onLoadedData={() => !videoStarted && playIntroVideo()}
          playsInline
          muted
        />
        <button
          onClick={skipIntro}
          className="absolute bottom-8 right-8 px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition"
        >
          Skip Intro
        </button>
      </div>
    );
  }

  // Home Screen
  if (gameState === 'home') {
    return (
      <div className="min-h-screen bg-[#050505] text-white relative overflow-x-hidden selection:bg-red-600/30">

        {/* Three.js Canvas */}
        <canvas id="three-canvas" className="fixed inset-0 pointer-events-none opacity-40 z-0" />

        {/* Cinematic Background Layer */}
        <div className="fixed inset-0 pointer-events-none z-[1]">
          {/* Animated Red Orbs */}
          <div className="absolute top-20 left-[10%] w-96 h-96 bg-red-600/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-20 right-[10%] w-80 h-80 bg-red-700/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />

          {/* DNA Helix Effect - Vertical Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="helix-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#dc2626', stopOpacity: 0 }} />
                <stop offset="50%" style={{ stopColor: '#dc2626', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#dc2626', stopOpacity: 0 }} />
              </linearGradient>
            </defs>
            {[...Array(8)].map((_, i) => (
              <line
                key={i}
                x1={`${(i + 1) * 12.5}%`}
                y1="0"
                x2={`${(i + 1) * 12.5}%`}
                y2="100%"
                stroke="url(#helix-gradient)"
                strokeWidth="2"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </svg>

          {/* Matrix Rain Effect */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute text-red-600 font-mono text-xs animate-matrix-rain"
                style={{
                  left: `${i * 6.67}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${8 + Math.random() * 4}s`
                }}
              >
                {Array.from({ length: 20 }, () =>
                  String.fromCharCode(0x30A0 + Math.random() * 96)
                ).join('\n')}
              </div>
            ))}
          </div>

          {/* Subtle Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_90%)] z-20" />

          {/* Animated Grid System */}
          <div
            className="absolute inset-0 opacity-[0.03] animate-[grid-shift_20s_linear_infinite]"
            style={{
              backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}
          />

          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-red-500/30 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${15 + Math.random() * 10}s`
                }}
              />
            ))}
          </div>

          {/* CRT Scanline Effect */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,_rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-30 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20" />
        </div>

        {/* Add these keyframes to your global CSS or in a <style> tag */}
        <style jsx>{`
        @keyframes grid-shift {
          0% { background-position: 0 0; }
          100% { background-position: 50px 50px; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.3; }
          50% { transform: translateY(-100vh) translateX(20px); opacity: 0.1; }
          90% { opacity: 0.3; }
        }
        @keyframes matrix-rain {
          0% { 
            transform: translateY(-100%); 
            opacity: 0;
          }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { 
            transform: translateY(100vh); 
            opacity: 0;
          }
        }
        .animate-matrix-rain {
          animation: matrix-rain linear infinite;
          white-space: pre;
          line-height: 1.2;
        }
      `}</style>

        <div className="relative z-20 container mx-auto px-4 py-8 md:py-16 flex flex-col items-center max-w-7xl">

          {/* Header / Hero */}
          <header className="text-center mb-20">
            <div className="inline-block relative mb-6">
              <div className="absolute inset-0 bg-red-600 blur-3xl opacity-20 animate-pulse" />
              <Skull className="w-16 h-16 md:w-20 md:h-20 text-red-600 relative z-10 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]" />
            </div>

            <div className="relative">
              <GlitchText
                text="CIPHER TRAIL"
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[8rem] font-black tracking-tight leading-none text-red-600 whitespace-nowrap"
                style={{
                  textShadow: '0 0 40px rgba(220, 38, 38, 0.6), 0 0 80px rgba(220, 38, 38, 0.3), 0 10px 30px rgba(0, 0, 0, 0.8)',
                  filter: 'drop-shadow(0 0 2px rgba(220, 38, 38, 0.8))'
                }}
              />
              {/* Subtle red underline accent */}
              <div className="h-1 w-32 md:w-48 mx-auto mt-4 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-60 rounded-full" />
            </div>

            <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6">
              <div className="h-[2px] w-12 sm:w-16 bg-gradient-to-r from-transparent via-red-600/50 to-red-600" />
              <p className="text-xs sm:text-sm md:text-base text-red-500 font-mono font-bold tracking-[0.3em] sm:tracking-[0.4em] uppercase drop-shadow-[0_0_10px_rgba(239,68,68,0.5)] whitespace-nowrap">
                Death Note Edition
              </p>
              <div className="h-[2px] w-12 sm:w-16 bg-gradient-to-l from-transparent via-red-600/50 to-red-600" />
            </div>

            <p className="mt-8 text-neutral-500 text-xs md:text-sm tracking-[0.6em] font-medium opacity-60 uppercase">
              Agnel Cyber Cell &bull; Securing the Digital Realm
            </p>
          </header>

          {/* Main Interface Grid */}
          <main className="grid lg:grid-cols-12 gap-8 w-full mb-20">

            {/* Access Terminal */}
            <div className="lg:col-span-7 bg-neutral-900/30 border border-white/5 rounded-3xl p-8 backdrop-blur-md relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50" />

              <div className="flex items-center justify-between mb-10">
                <h2 className="text-xl font-bold flex items-center gap-3 font-mono tracking-tighter">
                  <Terminal className="w-5 h-5 text-red-600" />
                  TERMINAL_SESSION: START
                </h2>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
                  <div className="w-2 h-2 rounded-full bg-red-900" />
                </div>
              </div>

              <div className="space-y-8">
                <div className="relative">
                  <label className="text-[10px] font-mono text-neutral-500 uppercase tracking-[0.3em] mb-3 block">User_Identifier</label>
                  <input
                    type="text"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all outline-none font-mono text-lg"
                    placeholder="TEAM_NAME_NULL"
                  />
                </div>

                <div className="relative">
                  <label className="text-[10px] font-mono text-neutral-500 uppercase tracking-[0.3em] mb-3 block">Protocol_Access_Code</label>
                  <input
                    type="number"
                    value={teamId}
                    onChange={(e) => setTeamId(e.target.value)}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all outline-none font-mono text-lg"
                    placeholder="00"
                  />
                </div>

                <button
                  onClick={handleStart}
                  className="w-full relative group h-16 mt-4 overflow-hidden rounded-xl bg-red-600 text-white font-black text-xl tracking-tighter transition-all hover:scale-[1.01] active:scale-[0.98]"
                >
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative flex items-center justify-center gap-3">
                    INITIALIZE SYSTEM
                    <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </div>

            {/* Side Info Panel */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'Teams', val: '15', col: 'text-cyan-500', icon: Users },
                  { label: 'Stages', val: '05', col: 'text-purple-500', icon: Trophy },
                  { label: 'Uptime', val: 'LIVE', col: 'text-red-500', icon: Flame },
                ].map((stat, i) => (
                  <div key={i} className="bg-neutral-900/40 border border-white/5 p-5 rounded-2xl text-center hover:bg-neutral-800/50 transition-colors">
                    <stat.icon className={`w-5 h-5 ${stat.col} mx-auto mb-2`} />
                    <div className="text-2xl font-black">{stat.val}</div>
                    <div className="text-[9px] font-mono text-neutral-500 uppercase tracking-tighter">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Rules Block */}
              <div className="flex-1 bg-gradient-to-b from-neutral-900/60 to-transparent border border-white/5 p-8 rounded-3xl relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-red-600/10 rounded-lg">
                    <Lock className="w-5 h-5 text-red-600" />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-[0.3em]">Directives</h3>
                </div>

                <div className="space-y-5">
                  {[
                    "Decrypt coordinates to advance location.",
                    "Time-based elimination active each round.",
                    "Last survivor claims the Death Note."
                  ].map((rule, idx) => (
                    <div key={idx} className="flex gap-4 group">
                      <span className="font-mono text-red-600 font-bold">0{idx + 1}</span>
                      <p className="text-sm text-neutral-400 group-hover:text-neutral-200 transition-colors">{rule}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>

          {/* Personnel Section */}
          <section className="w-full">
            <div className="flex items-center gap-6 mb-12">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-neutral-800 to-neutral-800" />
              <h2 className="text-xs font-mono font-bold tracking-[1em] text-neutral-600 uppercase">Intel_Personnel</h2>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-neutral-800 to-neutral-800" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <CharacterCard image="/kira-face.jpg" name="KIRA" description="User: Light Yagami. Capability: High-level manipulation and strategy." icon={Skull} />
              <CharacterCard image="/l-detective.jpg" name="L" description="User: Unknown. Capability: Unparalleled deductive reasoning." icon={Eye} />
              <CharacterCard image="/ryuk-shinigami.jpg" name="RYUK" description="User: Shinigami. Capability: Neutral observer of the trail." icon={Ghost} />
            </div>
          </section>
        </div>

        {/* Footer Ticker */}
        <footer className="fixed bottom-0 w-full bg-red-600 text-white py-1 z-50 overflow-hidden hidden md:block">
          <div className="flex animate-[marquee_20s_linear_infinite] whitespace-nowrap font-mono text-[10px] font-bold uppercase tracking-tighter">
            {[1, 2, 3, 4, 5].map(i => (
              <span key={i} className="mx-4">
                System Online // No unauthorized access // Cipher Trail 2026 // Agnel Cyber Cell // Initializing Round 1 // System Online //
              </span>
            ))}
          </div>
        </footer>
      </div>
    );
  }

  // Start Round Screen (Breathing space between rounds)
  if (gameState === 'playing' && !readyForRound) {
    const roundLabel = round <= 3 ? `Round ${round} - Group ${group}` : round === 4 ? 'Semi-Finals' : 'Grand Finale';

    return (
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex items-center justify-center px-4">
        <div className="text-center max-w-2xl">
          <div className="mb-8">
            <Flame className="w-24 h-24 text-red-600 mx-auto animate-pulse drop-shadow-[0_0_30px_rgba(220,38,38,0.8)]" />
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-red-600 via-orange-500 to-red-700 bg-clip-text text-transparent">
              {roundLabel}
            </span>
          </h1>

          <div className="mb-8 space-y-4">
            <p className="text-2xl text-gray-300">
              Team <span className="text-red-500 font-bold">{teamName}</span>
            </p>
            <p className="text-gray-400">
              Take a breath. Strategize. Prepare for the next challenge.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <div className="text-green-500 text-3xl font-black">{score}</div>
              <div className="text-xs text-gray-500 uppercase">Score</div>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
              <div className="text-purple-500 text-3xl font-black">{round}/5</div>
              <div className="text-xs text-gray-500 uppercase">Round</div>
            </div>
          </div>

          <button
            onClick={() => setReadyForRound(true)}
            className="px-12 py-5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black rounded-xl text-xl transition-all shadow-2xl shadow-red-600/50 hover:scale-105 uppercase tracking-wider"
          >
            Start Round {round}
          </button>
        </div>
      </div>
    );
  }

  // Playing State
  if (gameState === 'playing') {
    const puzzle = getCurrentPuzzle();

    if (!puzzle) {
      return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center">
          <div className="text-center">
            <AlertTriangle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold">Error: Puzzle not found</h2>
          </div>
        </div>
      );
    }

    const roundLabel = round <= 3 ? `Round ${round} - Group ${group}` : round === 4 ? 'Semi-Finals' : 'Grand Finale';

    // Format timer display
    const formatTime = (seconds: number) => {
      const m = Math.floor(seconds / 60);
      const s = seconds % 60;
      return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    return (
      <div className="relative min-h-screen">
        {/* Glitch Effect Overlay */}
        {screenGlitch && (
          <div className="fixed inset-0 z-50 pointer-events-none">
            <div className="absolute inset-0 bg-red-600 opacity-40 animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl md:text-9xl font-black text-red-500 animate-bounce drop-shadow-[0_0_50px_rgba(239,68,68,1)]">
                WRONG FLAG!
              </div>
            </div>
            <div className="absolute inset-0" style={{
              animation: 'glitch 0.3s infinite',
              background: 'repeating-linear-gradient(0deg, rgba(255,0,0,0.1) 0px, transparent 2px, transparent 4px, rgba(255,0,0,0.1) 4px)',
            }}></div>
          </div>
        )}

        <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-4 py-6">
          <div className="max-w-4xl mx-auto">
            {/* Header with Timer */}
            <div className="mb-8 pb-6 border-b-2 border-red-900/50">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-white">{teamName}</h2>
                  <p className="text-gray-400 text-sm">Team ID: {teamId} {round <= 3 && `| Group ${group}`}</p>
                </div>
                <div className="text-right">
                  <div className="text-green-500 text-3xl md:text-4xl font-black font-mono">{score}</div>
                  <div className="text-xs text-gray-500 uppercase">Points</div>
                </div>
              </div>

              {/* COUNTDOWN TIMER - Prominent Display */}
              <div className={`bg-gradient-to-r ${timeLeft < 60 ? 'from-red-950 to-red-900' : 'from-gray-900 to-black'} border-2 ${timeLeft < 60 ? 'border-red-600' : 'border-red-900'} rounded-xl p-6 text-center ${timeLeft < 60 ? 'animate-pulse' : ''}`}>
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Clock className={`w-8 h-8 ${timeLeft < 60 ? 'text-red-500 animate-bounce' : 'text-red-400'}`} />
                  <div className={`text-5xl md:text-6xl font-black font-mono ${timeLeft < 60 ? 'text-red-500' : 'text-red-400'}`}>
                    {formatTime(timeLeft)}
                  </div>
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">
                  {timeLeft < 60 ? '⚠️ TIME RUNNING OUT! ⚠️' : 'Time Remaining'}
                </div>
              </div>
            </div>

            {/* Round Progress */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-lg font-bold text-red-500">{roundLabel}</span>
                <span className="text-sm text-gray-400 font-mono">Stage {round}/5</span>
              </div>
              <div className="h-3 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
                <div
                  className="h-full bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 transition-all duration-1000 shadow-lg shadow-red-600/50"
                  style={{ width: `${(round / 5) * 100}%` }}
                />
              </div>
            </div>

            {/* Main Puzzle Card */}
            <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border-2 border-red-900/60 rounded-2xl p-6 md:p-8 shadow-2xl shadow-red-900/20 mb-8">
              {/* Title */}
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-800">
                <div className="p-3 bg-red-950/50 rounded-xl border border-red-900">
                  <MapPin className="w-7 h-7 text-red-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-black text-white">{puzzle.title}</h3>
                  <p className="text-gray-400 text-sm uppercase tracking-wider">Physical Hunt Challenge</p>
                </div>
                <Lock className="w-6 h-6 text-red-600" />
              </div>

              {/* Encrypted Riddle */}
              <div className="space-y-6">
                <div className="bg-black/60 border-2 border-red-900/40 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Terminal className="w-5 h-5 text-red-500" />
                    <div className="text-sm text-red-400 uppercase font-bold tracking-widest">Encrypted Riddle</div>
                  </div>
                  <div className="text-white font-mono text-base md:text-lg leading-relaxed bg-gray-900/50 p-4 rounded-lg border border-gray-800 break-all whitespace-pre-wrap">
                    {puzzle.riddle}
                  </div>
                </div>

                {/* Misleading Hint Section (Hidden by default) */}
                {showHint && (
                  <div className="bg-purple-950/20 border-2 border-purple-900/40 rounded-xl p-6 animate-pulse">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Ghost className="w-6 h-6 text-purple-500 animate-bounce" />
                        <div className="text-sm text-purple-400 uppercase font-bold tracking-widest">Ryuk's Hint 🍎</div>
                      </div>
                      <div className="text-xs text-gray-500">
                        Hint {currentHintIndex + 1}/{puzzle.hints.length}
                      </div>
                    </div>
                    <div className="text-white/90 italic leading-relaxed mb-4">{puzzle.hints[currentHintIndex]}</div>

                    {/* Next Hint Button */}
                    {puzzle.hints.length > 1 && (
                      <button
                        onClick={() => setCurrentHintIndex((currentHintIndex + 1) % puzzle.hints.length)}
                        className="w-full px-4 py-2 bg-purple-900/50 hover:bg-purple-800/50 border border-purple-600 rounded-lg text-purple-300 text-sm font-bold transition-all hover:scale-105 flex items-center justify-center gap-2"
                      >
                        <Ghost className="w-4 h-4" />
                        Next Hint →
                      </button>
                    )}

                    <div className="text-xs text-gray-500 mt-3 text-center">※ We warned you this would be useless...</div>
                  </div>
                )}

                {/* Instructions */}
                <div className="bg-yellow-950/10 border border-yellow-900/30 rounded-xl p-5">
                  <div className="text-yellow-400 font-bold text-sm mb-2">📍 HOW TO PROCEED:</div>
                  <ol className="text-gray-300 text-sm space-y-2">
                    <li><span className="text-cyan-400 font-mono">1.</span> Decode the encrypted riddle above</li>
                    <li><span className="text-cyan-400 font-mono">2.</span> Find the physical location on campus</li>
                    <li><span className="text-cyan-400 font-mono">3.</span> Locate the chit at that location</li>
                    <li><span className="text-cyan-400 font-mono">4.</span> Enter the key from the chit in the input field below</li>
                  </ol>
                </div>

                {/* Answer Input */}
                <div className="space-y-4">
                  <label className="block">
                    <div className="text-sm text-gray-400 uppercase mb-2 font-bold tracking-wider">
                      🔐 Enter the Key from Chit
                    </div>
                    <div className="flex gap-3">
                      <input
                        type="text"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSubmitAnswer()}
                        className={`flex-1 px-5 py-4 bg-black border-2 rounded-xl text-white font-mono text-lg uppercase focus:outline-none transition-all ${wrongAnswer
                          ? 'border-red-600 animate-shake shadow-lg shadow-red-600/50'
                          : 'border-gray-700 focus:border-green-600 focus:shadow-lg focus:shadow-green-600/30'
                          }`}
                        placeholder="ACC{...}"
                        autoFocus
                      />
                      <button
                        onClick={handleSubmitAnswer}
                        className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-black rounded-xl transition-all shadow-lg hover:shadow-green-600/50 uppercase tracking-wider"
                      >
                        Submit
                      </button>
                    </div>
                  </label>

                  {wrongAnswer && (
                    <div className="flex items-center gap-2 text-red-500 bg-red-950/30 border border-red-900 rounded-lg p-3 animate-pulse">
                      <AlertTriangle className="w-5 h-5" />
                      <span className="font-bold">INCORRECT KEY! Try again.</span>
                    </div>
                  )}

                  {/* Show Hint Button */}
                  <button
                    onClick={() => setShowHint(!showHint)}
                    className="text-sm text-purple-400 hover:text-purple-300 transition-all underline decoration-dotted hover:scale-105 flex items-center gap-2 mx-auto"
                  >
                    <Ghost className="w-4 h-4" />
                    {showHint ? '🙈 Hide Ryuk\'s Useless Hint' : '🍎 Desperate? Click for Ryuk\'s "Hint" (Spoiler: It won\'t help)'}
                  </button>
                </div>
              </div>
            </div>

            {/* Stats Footer */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center">
                <div className="text-purple-500 text-2xl font-black">{round}/5</div>
                <div className="text-xs text-gray-500 uppercase">Round</div>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center">
                <div className="text-green-500 text-2xl font-black">{score}</div>
                <div className="text-xs text-gray-500 uppercase">Score</div>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center">
                <div className={`text-2xl font-black font-mono ${timeLeft < 60 ? 'text-red-500 animate-pulse' : 'text-yellow-500'}`}>
                  {formatTime(timeLeft)}
                </div>
                <div className="text-xs text-gray-500 uppercase">Time Left</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Disqualified Screen (Timer Expired)
  if (gameState === 'disqualified') {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 relative overflow-hidden">
        {/* Red Flashing Background */}
        <div className="absolute inset-0 bg-red-600 animate-pulse opacity-30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/50 via-black to-black"></div>

        {/* Alert Lines */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-1 bg-red-600 opacity-50 animate-pulse"
            style={{
              top: `${i * 10}%`,
              animationDelay: `${i * 0.1}s`
            }}
          ></div>
        ))}

        <div className="text-center max-w-3xl z-10 relative">
          <div className="mb-8">
            <Skull className="w-40 h-40 text-red-600 mx-auto animate-bounce drop-shadow-[0_0_30px_rgba(220,38,38,0.8)]" />
          </div>

          <h1 className="text-7xl md:text-9xl font-black mb-6 animate-pulse">
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-700 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(220,38,38,1)]">
              DISQUALIFIED
            </span>
          </h1>

          <div className="mb-8 space-y-4">
            <p className="text-3xl text-red-400 font-bold animate-pulse">
              ⚠️ TIME EXPIRED ⚠️
            </p>
            <p className="text-xl text-gray-300">
              Team <span className="text-red-500 font-bold">{teamName}</span>
            </p>
            <p className="text-lg text-gray-400 font-mono">
              「 名前を書かれた人間は死ぬ 」
            </p>
          </ div>

          <div className="bg-black/70 border-2 border-red-600 rounded-xl p-8 mb-8 backdrop-blur-sm">
            <div className="text-red-500 text-xl font-mono mb-4">
              ⏱️ 15:00 COUNTDOWN REACHED 00:00
            </div>
            <div className="text-gray-400 text-sm">
              Round {round} | Score: {score}
            </div>
          </div>

          <div className="text-red-400 text-sm font-mono mb-8 animate-pulse">
            [ SYSTEM TERMINATED ]
          </div>

          <button
            onClick={() => window.location.reload()}
            className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg text-lg transition-all shadow-lg hover:shadow-red-600/50"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Victory State
  if (gameState === 'victory') {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
        <div className="text-center max-w-2xl">
          <div className="mb-8">
            <Trophy className="w-32 h-32 text-yellow-500 mx-auto animate-bounce" />
          </div>
          <h1 className="text-6xl font-black mb-4">
            <GlitchText text="VICTORY!" className="text-yellow-500" />
          </h1>
          <p className="text-2xl text-gray-300 mb-8">
            Congratulations, <span className="text-red-500 font-bold">{teamName}</span>!
          </p>
          <p className="text-lg text-gray-400 mb-8">
            You've conquered all 5 rounds and emerged victorious in the Cipher Trail.
          </p>
          <div className="bg-gray-900 border border-yellow-600 rounded-xl p-8 mb-8">
            <div className="text-yellow-500 text-5xl font-bold mb-2">{score}</div>
            <div className="text-gray-400">Final Score</div>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg text-lg transition"
          >
            Play Again
          </button>
        </div>
      </div>
    );
  }

  return null;
}