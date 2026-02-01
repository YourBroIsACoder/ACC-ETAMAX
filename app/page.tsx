'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Skull, Clock, Lock, Terminal, Eye, MapPin, AlertTriangle, ChevronRight, Binary, FileText, Ghost, Flame, Zap, Shield, BookOpen, Star, Trophy, Users } from 'lucide-react';

/**
 * AGNEL CYBER CELL - DEATH NOTE CTF TOURNAMENT
 * 
 * TOURNAMENT STRUCTURE:
 * Round 1 Phase 1: 5 Groups x 5 Teams -> 1 eliminated per group (20 advance)
 * Round 1 Phase 2: 5 Groups x 4 Teams -> 1 eliminated per group (15 advance)
 * Round 2 Phase 1: 3 Groups x 5 Teams -> 2 eliminated per group (9 advance)
 * Round 2 Phase 2: 3 Groups x 3 Teams -> Finals
 * Round 3: 3 Teams on common path -> 1 Winner
 * 
 * GROUP ASSIGNMENT: Team ID % appropriate divisor determines group
 */

// Group definitions based on Team ID
const getGroupFromTeamId = (teamId: string | number, totalGroups: number): string => {
  const id = parseInt(teamId.toString()) || 0;
  return String.fromCharCode(65 + (id % totalGroups)); // A, B, C, D, E
};

// GAME DATA - Different data for each group and round/phase
const GAME_DATA = {
  round1Phase1: {
    groupA: [
      {
        id: 1,
        story: "Target identified. Location: Engineering Block Entrance.",
        cipher: "Caesar (+3): HQJLQHHULQJ",
        clue: "Find the date carved on the main pillar.",
        answer: "2015",
        hint: "Look at the historical plaque."
      },
      {
        id: 2,
        story: "Second victim awaits. The library holds secrets.",
        cipher: "Base64: TGlicmFyeSBSeWFrdQ==",
        clue: "Count red books on the top shelf.",
        answer: "7",
        hint: "Academic section, third floor."
      },
      {
        id: 3,
        story: "Final location for Phase 1. The cafeteria knows.",
        cipher: "Vigenere (Key: KIRA): FDQQHHQ",
        clue: "Price of the special meal today.",
        answer: "120",
        hint: "Ask at the counter."
      }
    ],
    groupB: [
      {
        id: 1,
        story: "Commence Protocol B. Chemistry lab entrance.",
        cipher: "Binary: 01000011 01001000 01000101 01001101",
        clue: "Find the periodic table poster, locate element 79.",
        answer: "AU",
        hint: "Gold is valuable."
      },
      {
        id: 2,
        story: "Second phase. Sports complex awaits.",
        cipher: "Morse: ... .--. --- .-. - ...",
        clue: "Jersey number of the team captain.",
        answer: "23",
        hint: "Main gym, locker area."
      },
      {
        id: 3,
        story: "Almost there. Computer lab basement.",
        cipher: "Hex: 50 41 53 53 57 4F 52 44",
        clue: "Last 4 digits of the lab access code on bulletin board.",
        answer: "9876",
        hint: "Near the entrance."
      }
    ],
    groupC: [
      {
        id: 1,
        story: "Group C protocol initiated. Main auditorium.",
        cipher: "Caesar (+5): IJMFQSQYF",
        clue: "Seat number written behind the main screen.",
        answer: "B7",
        hint: "Backstage area."
      },
      {
        id: 2,
        story: "Moving forward. Admin building reception.",
        cipher: "Base64: QURNSUkxUk9P",
        clue: "Find the founding year on the wall plaque.",
        answer: "1985",
        hint: "Near the receptionist desk."
      },
      {
        id: 3,
        story: "Final check. Student center bulletin board.",
        cipher: "Vigenere (Key: DEATH): IJSRXSRE",
        clue: "Phone number of the lost and found.",
        answer: "9876543210",
        hint: "Main notice board."
      }
    ],
    groupD: [
      {
        id: 1,
        story: "Phase 1 Group D. Botanical garden entrance.",
        cipher: "Binary: 01000110 01001100 01001111 01010111 01000101 01010010",
        clue: "Count the marble benches.",
        answer: "12",
        hint: "Central pathway."
      },
      {
        id: 2,
        story: "Moving to hostel zone.",
        cipher: "Hex: 52 4F 4F 4D 32 30 31",
        clue: "Building name written on the gate.",
        answer: "SHANTI",
        hint: "Main residential area."
      },
      {
        id: 3,
        story: "Final location. The temple near campus.",
        cipher: "Caesar (+7): YPHTJSL",
        clue: "Count the bell rings when you arrive at 3 PM.",
        answer: "3",
        hint: "Listen carefully."
      }
    ],
    groupE: [
      {
        id: 1,
        story: "Group E commences. Old campus building.",
        cipher: "Vigenere (Key: NOTE): HSVBFOB",
        clue: "Year inscribed on the cornerstone.",
        answer: "1923",
        hint: "Bottom left corner of the building."
      },
      {
        id: 2,
        story: "Second challenge. Parking lot number 5.",
        cipher: "Base64: UEFSSwox",
        clue: "Slot number of the reserved spot.",
        answer: "15",
        hint: "Near the entrance gate."
      },
      {
        id: 3,
        story: "Final phase. Water fountain junction.",
        cipher: "Binary: 01000001 01000111 01000101",
        clue: "Initials on the stone bench.",
        answer: "AGE",
        hint: "Central courtyard."
      }
    ]
  },
  round1Phase2: {
    groupA: [
      { id: 1, story: "Advanced Group A.", cipher: "Vigenere (Key: SHINIGAMI): PQVVGMF", clue: "Find the mosaic.", answer: "LIBRARY", hint: "Artistic section." },
      { id: 2, story: "Deeper into chaos.", cipher: "Caesar (+4): XMSR", clue: "Count items.", answer: "8", hint: "Administration area." }
    ],
    groupB: [
      { id: 1, story: "Phase 2 Group B intensifies.", cipher: "Base64: Q0hBTExFTkdF", clue: "Secret code.", answer: "CHALLENGE", hint: "Hidden location." },
      { id: 2, story: "Final barrier.", cipher: "Hex: 46 49 4E 41 4C", clue: "Ultimate answer.", answer: "FINAL", hint: "Top floor." }
    ],
    groupC: [
      { id: 1, story: "Group C Phase 2 begins.", cipher: "Binary: 01010000 01010010 01010011", clue: "Mystery location.", answer: "PRS", hint: "Building sector." },
      { id: 2, story: "Approaching victory.", cipher: "Caesar (+6): YLVXV", clue: "The answer awaits.", answer: "QUEST", hint: "Garden area." }
    ],
    groupD: [
      { id: 1, story: "Group D Phase 2 active.", cipher: "Vigenere (Key: RYUK): GSVPH", clue: "Dark location.", answer: "REALM", hint: "Underground passage." },
      { id: 2, story: "Final step.", cipher: "Base64: RVAFVA==", clue: "Code retrieved.", answer: "HEAVEN", hint: "Rooftop." }
    ],
    groupE: [
      { id: 1, story: "Group E Phase 2 initiated.", cipher: "Binary: 01001110 01001111 01010100 01000101", clue: "Sacred item.", answer: "NOTE", hint: "Holy place." },
      { id: 2, story: "Climax approaches.", cipher: "Hex: 44 4F 4F 4D", clue: "Ultimate reality.", answer: "DOOM", hint: "Tower." }
    ]
  },
  round2Phase1: {
    groupA: [
      { id: 1, story: "15 survive. Group A Round 2 Phase 1.", cipher: "Vigenere (Key: LIGHT): OHYPO", clue: "Find the beacon.", answer: "TOWER", hint: "Highest point visible." },
      { id: 2, story: "Two barriers remain.", cipher: "Caesar (+8): YVGFK", clue: "Sacred symbol.", answer: "TRUTH", hint: "Centre of campus." },
      { id: 3, story: "Elimination looms.", cipher: "Base64: RElWTE5FTlk=", clue: "Count divinity.", answer: "DIVINELY", hint: "Spiritual place." }
    ],
    groupB: [
      { id: 1, story: "Group B Round 2 Phase 1 - Intensifies.", cipher: "Binary: 01000101 01010100 01010010 01001001", clue: "Path revealed.", answer: "ETRI", hint: "Research institute." },
      { id: 2, story: "Pressure increases.", cipher: "Hex: 4E 4F 54 45 42", clue: "Notebook fragment.", answer: "NOTEB", hint: "Study area." },
      { id: 3, story: "Near the edge.", cipher: "Vigenere (Key: KIRA): ZYSLWZ", clue: "Killer's trace.", answer: "SHADOW", hint: "Dark corner." }
    ],
    groupC: [
      { id: 1, story: "Group C fights for survival.", cipher: "Caesar (+12): URYYBJBEYQ", clue: "Encrypted greeting.", answer: "HELLOWORLD", hint: "Tech area." },
      { id: 2, story: "Two teams will fall.", cipher: "Base64: V0lMREM=", clue: "Wildcard discovered.", answer: "WILDC", hint: "Unexpected place." },
      { id: 3, story: "Last stand.", cipher: "Binary: 01010010 01000001 01010000 01010100", clue: "Musical note.", answer: "RAPT", hint: "Auditorium again." }
    ]
  },
  round2Phase2: {
    groupA: [
      { id: 1, story: "9 remain. Group A - Final eliminations.", cipher: "Vigenere (Key: DEATHNOTE): QAPZNDHGZ", clue: "Convergence point.", answer: "CONVERGENC", hint: "Main plaza." }
    ],
    groupB: [
      { id: 1, story: "Group B seeks dominance.", cipher: "Hex: 44 4F 4D 49 4E 41 54 45", clue: "Rise of the chosen.", answer: "DOMINATE", hint: "Power chamber." }
    ],
    groupC: [
      { id: 1, story: "Group C makes final push.", cipher: "Caesar (+15): YBKNFNTZGT", clue: "The god emerges.", answer: "GODUNCOVRS", hint: "Highest ground." }
    ]
  },
  round3: [
    {
      id: 1,
      story: "Only 3 teams remain. The Death Note lies at the highest point of the campus. Find it before your rivals.",
      cipher: "Vigenere (Key: LIGHTYAGAMI): BSVHFBV",
      clue: "The ultimate answer awaits at the rooftop of the tallest building on campus. Look for the black notebook hidden in plain sight.",
      answer: "ROOFTOP",
      hint: "Aim higher. Always higher."
    }
  ]
};

// Components
const GlitchText = ({ text, className = "" }: { text: string; className?: string }) => (
  <div className={`relative inline-block ${className}`}>
    <span className="relative z-10">{text}</span>
  </div>
);

const CharacterCard = ({ image, name, description, icon: Icon }: { image?: string; name: string; description: string; icon?: React.ElementType }) => (
  <div className="group relative overflow-hidden rounded-lg shadow-2xl h-80 bg-gradient-to-b from-gray-900 to-black border border-red-900/30 hover:border-red-600 transition-all duration-300 hover:shadow-red-900/50">
    <div className="absolute inset-0">
      <img
        src={image || "/placeholder.svg"}
        alt={name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent group-hover:from-red-900/40"></div>
    </div>
    <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
      <div className="flex items-center gap-2 mb-2">
        {Icon && <Icon className="w-5 h-5 text-red-500" />}
        <h3 className="text-xl font-bold">{name}</h3>
      </div>
      <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{description}</p>
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
  const [phase, setPhase] = useState(1);
  const [group, setGroup] = useState('');
  const [stageIndex, setStageIndex] = useState(0);
  const [inputAnswer, setInputAnswer] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (msg: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [`[${timestamp}] ${msg}`, ...prev]);
  };

  const handleVideoStart = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setVideoStarted(true);
    }
  };

  const handleVideoEnd = () => {
    // Start fade out transition
    setIsTransitioning(true);
    // After fade out completes, move to intro screen
    setTimeout(() => {
      setGameState('intro');
      setIsTransitioning(false);
    }, 800); // Match this with CSS transition duration
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!teamName || !teamId) return;

    // Determine group based on Team ID
    let numGroups = 5; // Default for Round 1
    if (round === 2) numGroups = 3;
    if (round === 3) numGroups = 1;

    const assignedGroup = getGroupFromTeamId(teamId, numGroups);
    setGroup(assignedGroup);

    addLog(`Team ${teamName} (ID: ${teamId}) authenticated.`);
    addLog(`Assigned to Group ${assignedGroup}.`);
    addLog(`Round ${round} Phase ${phase} - STARTING.`);
    setGameState('playing');
  };

  const getGameDataForCurrentPhase = (): any[] => {
    if (round === 1 && phase === 1) return GAME_DATA.round1Phase1[`group${group}`] || [];
    if (round === 1 && phase === 2) return GAME_DATA.round1Phase2[`group${group}`] || [];
    if (round === 2 && phase === 1) return GAME_DATA.round2Phase1[`group${group}`] || [];
    if (round === 2 && phase === 2) return GAME_DATA.round2Phase2[`group${group}`] || [];
    if (round === 3) return GAME_DATA.round3 || [];
    return [];
  };

  const currentClue = getGameDataForCurrentPhase()[stageIndex];

  const handleSubmitAnswer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputAnswer) return;

    const normalizedInput = inputAnswer.trim().toLowerCase().replace(/\s/g, '');
    const normalizedSolution = currentClue.answer.toLowerCase().replace(/\s/g, '');

    if (normalizedInput === normalizedSolution) {
      addLog(`Correct: ${currentClue.answer}`);
      setInputAnswer('');
      setErrorMsg('');

      const gameData = getGameDataForCurrentPhase();

      if (stageIndex + 1 < gameData.length) {
        setStageIndex(prev => prev + 1);
      } else {
        // Phase/Round complete
        if (round === 1 && phase === 1) {
          setGameState('advancement');
        } else if (round === 1 && phase === 2) {
          setGameState('advancement');
        } else if (round === 2 && phase === 1) {
          setGameState('advancement');
        } else if (round === 2 && phase === 2) {
          setGameState('advancement');
        } else if (round === 3) {
          setGameState('victory');
        }
      }
    } else {
      setErrorMsg("ACCESS DENIED. INCORRECT KEY.");
      addLog(`Failed: ${inputAnswer}`);
    }
  };

  const proceedToNextPhase = () => {
    if (round === 1 && phase === 1) {
      setPhase(2);
      setStageIndex(0);
      setGameState('playing');
    } else if (round === 1 && phase === 2) {
      setRound(2);
      setPhase(1);
      setStageIndex(0);
      setGameState('playing');
    } else if (round === 2 && phase === 1) {
      setPhase(2);
      setStageIndex(0);
      setGameState('playing');
    } else if (round === 2 && phase === 2) {
      setRound(3);
      setPhase(1);
      setStageIndex(0);
      setGameState('playing');
    }
  };

  // Skip handler - only works when video is playing
  useEffect(() => {
    const handleSkip = (e) => {
      // Only allow skip if video has started and we're still in loading state
      if (gameState === 'loading' && videoStarted && (e.code === 'Space' || e.type === 'click')) {
        handleVideoEnd();
      }
    };

    if (gameState === 'loading' && videoStarted) {
      window.addEventListener('keydown', handleSkip);
      document.addEventListener('click', handleSkip);

      return () => {
        window.removeEventListener('keydown', handleSkip);
        document.removeEventListener('click', handleSkip);
      };
    }
  }, [gameState, videoStarted]);

  // --- Loading Screen with Video ---
  if (gameState === 'loading') {
    return (
      <div
        className={`min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden transition-opacity duration-800 cursor-pointer ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
        onClick={!videoStarted ? handleVideoStart : undefined}
      >
        {/* Video Background - initially hidden behind black screen */}
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${videoStarted ? 'opacity-100' : 'opacity-0'}`}
          onEnded={handleVideoEnd}
          playsInline
          preload="auto"
        >
          <source src="/intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Simple black screen with "click here" - shown before video starts */}
        {!videoStarted && (
          <div className="relative z-20 flex flex-col items-center justify-center text-center pointer-events-none">
            <div className="space-y-6 animate-pulse">
              <p className="text-2xl md:text-3xl text-gray-400 font-light tracking-wide">
                Click anywhere to start
              </p>
              <div className="w-16 h-16 mx-auto border-2 border-gray-600 rounded-full flex items-center justify-center hover:border-red-600 transition-colors duration-300">
                <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
              </div>
            </div>
          </div>
        )}

        {/* Skip instruction - shown when video is playing */}
        {videoStarted && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-fade-in">
            <div className="flex flex-col items-center gap-2 px-6 py-3 bg-black/60 backdrop-blur-md rounded-lg border border-gray-600">
              <p className="text-gray-300 text-sm font-mono flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-400 animate-pulse" />
                Press <span className="px-2 py-0.5 bg-gray-700 rounded font-bold text-yellow-400">SPACE</span> or <span className="px-2 py-0.5 bg-gray-700 rounded font-bold text-yellow-400">CLICK</span> to skip
              </p>
            </div>
          </div>
        )}

        {/* Audio Element - keep the Death Note theme */}
        <audio
          ref={audioRef}
          loop
          className="hidden"
          onPlay={() => console.log("[v0] Death Note theme playing")}
        >
          <source src="/deathnote-theme.mp3" type="audio/mpeg" />
        </audio>
      </div>
    );
  }

  // --- Intro Screen ---
  if (gameState === 'intro') {
    return (
      <div className="min-h-screen bg-black text-white overflow-hidden relative">
        {/* Aceternity UI Dot Matrix Background */}
        <div className="absolute inset-0 bg-black bg-dot-white/[0.2]">
          {/* Radial gradient overlay for the fade effect */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>

        {/* Dramatic gradient background with Death Note colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/20 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-gray-950 to-red-950/30"></div>

        {/* Animated red glow orbs */}
        <div className="fixed inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-red-900 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-red-950 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-red-500/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 10}s`
              }}
            ></div>
          ))}
        </div>

        {/* Vignette effect */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/60 pointer-events-none"></div>

        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-8 py-16">
          <div className="max-w-5xl w-full text-center space-y-16 animate-fade-in">

            {/* Top Section - Small branding */}
            <div className="space-y-3">
              <p className="text-sm md:text-base text-red-500 font-mono tracking-widest uppercase">Agnel Cyber Cell Presents</p>
            </div>

            {/* Center Hero Section - Main focus with enhanced CTF Championship */}
            <div className="space-y-8">
              <Skull className="w-24 h-24 mx-auto text-red-600 animate-pulse drop-shadow-2xl" />

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900" style={{ fontFamily: '"Old English Text MT", serif' }}>
                <GlitchText text="DEATH NOTE TOURNAMENT" />
              </h1>

              <div className="space-y-6">
                {/* Enhanced CTF Championship with glow */}
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-yellow-400 drop-shadow-[0_0_30px_rgba(251,191,36,0.5)] animate-pulse tracking-wider">
                  <span className="inline-block bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 text-transparent bg-clip-text drop-shadow-2xl">
                    CTF CHAMPIONSHIP
                  </span>
                </h2>

                <div className="text-4xl md:text-5xl font-bold text-red-500 drop-shadow-[0_0_20px_rgba(239,68,68,0.7)]">
                  2025
                </div>

                <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto mt-6">
                  25 Teams. 3 Rounds. 1 Death Note.
                  <br />
                  <span className="text-red-500 font-semibold text-2xl md:text-3xl">Find it before your rivals do.</span>
                </p>
              </div>
            </div>

            {/* Character Images Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <img src="/deathnote-notebook.jpg" alt="Death Note" className="w-full h-40 object-cover rounded-lg border-2 border-red-600 shadow-lg shadow-red-900/50 hover:scale-105 transition-transform duration-300" />
              <img src="/ryuk-shinigami.jpg" alt="Ryuk" className="w-full h-40 object-cover rounded-lg border-2 border-red-600 shadow-lg shadow-red-900/50 hover:scale-105 transition-transform duration-300" />
              <img src="/kira-face.jpg" alt="Kira" className="w-full h-40 object-cover rounded-lg border-2 border-red-600 shadow-lg shadow-red-900/50 hover:scale-105 transition-transform duration-300" />
              <img src="/l-detective.jpg" alt="L" className="w-full h-40 object-cover rounded-lg border-2 border-red-600 shadow-lg shadow-red-900/50 hover:scale-105 transition-transform duration-300" />
            </div>

            {/* Stats Grid - Better spacing */}
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto px-4">
              <div className="p-8 bg-gray-900/50 border border-gray-700 rounded-lg backdrop-blur-sm hover:border-red-600 transition-colors">
                <Users className="w-10 h-10 text-red-500 mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-2">25 Teams</h3>
                <p className="text-sm text-gray-400">Tournament Format</p>
              </div>
              <div className="p-8 bg-gray-900/50 border border-gray-700 rounded-lg backdrop-blur-sm hover:border-red-600 transition-colors">
                <Trophy className="w-10 h-10 text-red-500 mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-2">Multi-Round</h3>
                <p className="text-sm text-gray-400">Eliminations</p>
              </div>
              <div className="p-8 bg-gray-900/50 border border-gray-700 rounded-lg backdrop-blur-sm hover:border-red-600 transition-colors">
                <Clock className="w-10 h-10 text-red-500 mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-2">High Stakes</h3>
                <p className="text-sm text-gray-400">Every Minute Counts</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="space-y-6">
              <button
                onClick={() => setGameState('login')}
                className="px-16 py-5 bg-gradient-to-r from-red-600 to-red-800 text-white font-bold text-xl hover:from-red-700 hover:to-red-900 transition-all duration-300 rounded-lg tracking-widest uppercase shadow-lg shadow-red-900/50 hover:shadow-red-600/70 transform hover:scale-105"
              >
                Enter The Tournament
              </button>

              <p className="text-xs text-gray-600 font-mono">
                AGNEL CYBER CELL CTF CHAMPIONSHIP • {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- Login Screen ---
  if (gameState === 'login') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-gray-300 flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-red-900 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        </div>

        <div className="w-full max-w-2xl relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="hidden md:block">
              <div className="space-y-4">
                <img src="/l-detective.jpg" alt="L Detective" className="w-full rounded-lg border-2 border-red-600 shadow-lg shadow-red-900/50 mb-4" />
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 backdrop-blur-sm">
                  <p className="text-sm text-gray-400 italic">"May the best team win."</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 via-gray-950 to-black border-2 border-red-900/50 p-8 rounded-xl shadow-2xl shadow-red-900/30">
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-red-900/20 rounded-lg border border-red-600">
                  <Terminal className="w-8 h-8 text-red-600" />
                </div>
              </div>

              <h2 className="text-3xl font-bold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 tracking-widest">AUTHENTICATE</h2>
              <p className="text-center text-gray-500 text-sm mb-8">Enter Tournament</p>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider mb-2 text-gray-400 font-semibold">Team Name</label>
                  <input
                    type="text"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    className="w-full bg-black border-2 border-gray-700 hover:border-red-600/50 focus:border-red-600 p-3 pl-4 text-white focus:outline-none transition-all duration-300 font-mono rounded-lg"
                    placeholder="Team Alpha"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider mb-2 text-gray-400 font-semibold">Team ID (1-25)</label>
                  <input
                    type="number"
                    value={teamId}
                    onChange={(e) => setTeamId(e.target.value)}
                    className="w-full bg-black border-2 border-gray-700 hover:border-red-600/50 focus:border-red-600 p-3 pl-4 text-white focus:outline-none transition-all duration-300 font-mono rounded-lg"
                    placeholder="1-25"
                    min="1"
                    max="25"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 text-white font-bold py-3 transition-all duration-300 uppercase tracking-widest mt-6 rounded-lg shadow-lg shadow-red-900/50 hover:shadow-red-600/70 transform hover:scale-105"
                >
                  Join Tournament
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-800 text-center text-xs text-gray-600">
                {teamName && teamId && <span className="text-green-500">✓ Ready</span>}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- Playing Screen ---
  if (gameState === 'playing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black text-gray-300 font-mono flex flex-col lg:flex-row overflow-hidden">
        {/* Sidebar */}
        <div className="w-full lg:w-96 border-b lg:border-b-0 lg:border-r border-gray-800 p-6 flex flex-col bg-gradient-to-b from-gray-950 to-black">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800 tracking-widest">TOURNAMENT</h1>
                <p className="text-xs text-red-500 font-mono mt-1">Team: <span className="text-yellow-400">{teamName}</span></p>
                <p className="text-xs text-red-500 font-mono">Group: <span className="text-yellow-400">{group}</span></p>
              </div>
              <Skull className="w-8 h-8 text-red-600 animate-pulse" />
            </div>
          </div>

          {/* Tournament Progress */}
          <div className="mb-6 space-y-2">
            <h3 className="text-gray-500 text-xs uppercase font-bold">Tournament Progress</h3>
            <div className="space-y-2">
              <div className={`p-3 rounded border-l-4 ${round >= 1 ? 'border-l-green-600 bg-green-900/10' : 'border-l-gray-600 bg-gray-900/10'}`}>
                <p className={`text-xs font-mono ${round >= 1 ? 'text-green-500' : 'text-gray-500'}`}>
                  Round 1: {round === 1 ? (phase === 1 ? '● Phase 1' : '● Phase 2') : '✓ Complete'}
                </p>
              </div>
              <div className={`p-3 rounded border-l-4 ${round >= 2 ? 'border-l-green-600 bg-green-900/10' : 'border-l-gray-600 bg-gray-900/10'}`}>
                <p className={`text-xs font-mono ${round >= 2 ? 'text-green-500' : 'text-gray-500'}`}>
                  Round 2: {round === 2 ? (phase === 1 ? '● Phase 1' : '● Phase 2') : round > 2 ? '✓ Complete' : '○ Locked'}
                </p>
              </div>
              <div className={`p-3 rounded border-l-4 ${round >= 3 ? 'border-l-green-600 bg-green-900/10' : 'border-l-gray-600 bg-gray-900/10'}`}>
                <p className={`text-xs font-mono ${round >= 3 ? 'text-green-500' : 'text-gray-500'}`}>
                  Round 3: {round === 3 ? '● Finals' : round > 3 ? '✓ Won!' : '○ Locked'}
                </p>
              </div>
            </div>
          </div>

          {/* Timer */}
          <div className="mb-6 p-4 bg-gradient-to-r from-red-900/20 to-red-900/10 border-2 border-red-600 rounded-lg shadow-lg shadow-red-900/30">
            <h3 className="text-red-500 text-xs uppercase mb-3 flex items-center gap-2 font-bold">
              <Flame size={14} className="animate-pulse" /> Time Remaining
            </h3>
            <Timer initialTime={1200} onExpire={() => alert("TIME EXPIRED!")} />
            <div className="mt-2 text-xs text-red-400">R{round}P{phase} - Challenge {stageIndex + 1}</div>
          </div>

          {/* System Logs */}
          <div className="flex-1 overflow-y-auto mb-4 p-4 bg-black/50 border border-gray-800 rounded-lg">
            <h3 className="text-gray-500 text-xs uppercase font-bold border-b border-gray-700 pb-2 mb-3">Logs</h3>
            <div className="space-y-1">
              {logs.slice(0, 12).map((log, i) => (
                <div key={i} className="text-xs text-green-500 font-mono border-l border-green-900/30 pl-2 py-1">
                  {log}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full lg:flex-1 p-6 lg:p-12 relative flex flex-col overflow-y-auto">
          <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col justify-center relative z-10">
            <div className="flex items-center justify-between mb-8 pb-4 border-b-2 border-red-900/50">
              <div className="flex items-center space-x-4 text-sm uppercase tracking-widest text-gray-500">
                <span className="px-3 py-1 bg-red-900/20 border border-red-600 rounded text-red-500 font-bold">R{round}P{phase}</span>
                <ChevronRight size={14} />
                <span className="px-3 py-1 bg-blue-900/20 border border-blue-600 rounded text-blue-500 font-bold">GRP {group}</span>
              </div>
              <Eye className="w-6 h-6 text-red-600 animate-pulse" />
            </div>

            {currentClue && (
              <div className="mb-10 space-y-6">
                <div className="space-y-3">
                  <h2 className="text-4xl font-bold text-white mb-3 border-l-4 border-red-600 pl-6 text-balance">
                    {currentClue.story}
                  </h2>
                </div>

                {/* Cipher Block */}
                <div className="bg-gradient-to-r from-gray-900 to-black p-6 rounded-lg border-2 border-cyan-600/50 shadow-lg shadow-cyan-900/30">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 bg-cyan-900/30 rounded">
                      <Binary className="text-cyan-500 w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-cyan-500 font-bold text-sm uppercase mb-1">Cipher</h3>
                      <p className="font-mono text-base break-all text-white bg-black/50 p-3 rounded border border-cyan-900/30 leading-relaxed">{currentClue.cipher}</p>
                    </div>
                  </div>
                </div>

                {/* Objective Block */}
                <div className="bg-gradient-to-r from-black to-gray-900 p-6 rounded-lg border-2 border-yellow-600/50 shadow-lg shadow-yellow-900/30">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 bg-yellow-900/30 rounded">
                      <MapPin className="text-yellow-600 w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-yellow-600 font-bold text-sm uppercase mb-2">Your Mission</h3>
                      <p className="text-gray-300 text-base mb-3">{currentClue.clue}</p>
                      <div className="bg-black/50 p-3 rounded border-l-2 border-yellow-600">
                        <p className="text-xs text-yellow-500 italic">Hint: {currentClue.hint}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Answer Input */}
            <div className="mt-auto">
              <label className="block text-xs uppercase tracking-wider mb-3 text-gray-400 font-bold">
                Submit Answer
              </label>
              <form onSubmit={handleSubmitAnswer} className="relative">
                <div className="relative">
                  <Terminal className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 w-5 h-5" />
                  <input
                    type="text"
                    value={inputAnswer}
                    onChange={(e) => setInputAnswer(e.target.value)}
                    className="w-full bg-black border-2 border-gray-700 hover:border-green-600/50 focus:border-green-600 p-4 pl-12 pr-24 text-xl text-green-500 font-mono focus:outline-none focus:ring-2 focus:ring-green-900/50 transition-all rounded-lg"
                    placeholder="ENTER_ANSWER"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-green-700 to-green-900 hover:from-green-600 hover:to-green-800 text-white rounded font-bold uppercase text-sm border border-green-600 transition-all shadow-lg shadow-green-900/50 hover:scale-105"
                  >
                    Submit
                  </button>
                </div>
              </form>
              {errorMsg && (
                <div className="mt-3 p-3 bg-red-900/20 border-2 border-red-600 rounded text-red-500 text-sm font-bold flex items-center gap-2 animate-pulse shadow-lg shadow-red-900/30">
                  <AlertTriangle size={16} /> {errorMsg}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- Advancement/Elimination Screen ---
  if (gameState === 'advancement') {
    const getAdvancementMessage = () => {
      if (round === 1 && phase === 1) return "Phase 1 Complete! 4 teams advance from each group.";
      if (round === 1 && phase === 2) return "Round 1 Complete! 3 teams from each group advance to Round 2.";
      if (round === 2 && phase === 1) return "Phase 1 Complete! 3 teams advance from each group.";
      if (round === 2 && phase === 2) return "Round 2 Complete! 3 finalists compete for the Death Note!";
      return "Advanced!";
    };

    return (
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black flex flex-col items-center justify-center text-center p-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-red-900 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-2xl space-y-8">
          <div className="flex justify-center mb-8">
            <img src="/ryuk-shinigami.jpg" alt="Ryuk" className="w-64 h-64 object-cover rounded-full border-4 border-red-600 shadow-2xl shadow-red-900/50 animate-pulse" />
          </div>

          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">ADVANCEMENT</h2>
            <p className="text-xl text-gray-300">Congratulations, Team {teamName}!</p>
          </div>

          <div className="bg-gradient-to-r from-red-900/20 to-black border-2 border-red-900/50 rounded-lg p-8 backdrop-blur-sm">
            <p className="text-gray-300 text-lg italic mb-6">{getAdvancementMessage()}</p>
            <div className="flex justify-center gap-4 mt-6">
              <StatBox label="Round" value={round} icon={Star} color="border-red-600" />
              <StatBox label="Phase" value={phase} icon={Shield} color="border-green-600" />
              <StatBox label="Group" value={group} icon={Users} color="border-yellow-600" />
            </div>
          </div>

          <button
            onClick={proceedToNextPhase}
            className="px-12 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white font-bold text-lg hover:from-red-700 hover:to-red-900 transition-all duration-300 rounded-lg uppercase tracking-widest shadow-lg shadow-red-900/50 hover:shadow-red-600/70 transform hover:scale-105 w-full md:w-auto"
          >
            Continue to Next Phase
          </button>
        </div>
      </div>
    );
  }

  // --- Victory Screen ---
  if (gameState === 'victory') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-950 via-black to-black flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-900 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-2xl space-y-8">
          <div className="flex justify-center mb-8">
            <img src="/deathnote-notebook.jpg" alt="Death Note" className="w-64 h-80 object-cover rounded-lg border-4 border-red-600 shadow-2xl shadow-red-900/80 animate-bounce" />
          </div>

          <div className="space-y-4">
            <h1 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-600">DEATH NOTE FOUND</h1>
          </div>

          <div className="text-3xl text-yellow-300 font-bold">
            Team {teamName} - You are the God of the New World!
          </div>

          <div className="grid md:grid-cols-3 gap-4 my-8">
            <div className="p-6 bg-red-900/20 border-2 border-red-600 rounded-lg">
              <div className="text-2xl font-bold text-red-500 mb-1">CHAMPIONS</div>
              <p className="text-sm text-gray-300">Final 3</p>
            </div>
            <div className="p-6 bg-blue-900/20 border-2 border-blue-600 rounded-lg">
              <div className="text-2xl font-bold text-blue-500 mb-1">{teamName}</div>
              <p className="text-sm text-gray-300">Victory!</p>
            </div>
            <div className="p-6 bg-yellow-900/20 border-2 border-yellow-600 rounded-lg">
              <div className="text-2xl font-bold text-yellow-500 mb-1">TOURNAMENT</div>
              <p className="text-sm text-gray-300">Won!</p>
            </div>
          </div>

          <div className="p-8 bg-gradient-to-b from-black to-gray-900 border-2 border-red-600 rounded-lg font-mono text-left shadow-2xl shadow-red-900/50">
            <div className="space-y-3 text-white">
              <p className="text-red-500">{'> FINAL_TRANSMISSION.LOG'}</p>
              <p className="text-green-400">Congratulations Team <span className="text-yellow-400 font-bold">{teamName}</span></p>
              <p className="text-green-400">Status: <span className="text-green-500 font-bold">CHAMPION</span></p>
              <p className="text-green-400">You have conquered the Death Note Tournament.</p>
              <p className="text-green-400">Report to organizers for your trophy and prizes.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
