# Cipher Trail - Event Flow & Riddles

## Tournament Structure

**Total Teams:** 15  
**Groups:** 3 Groups (A, B, C) with 5 Teams each  
- **Group A:** Teams 1-5  
- **Group B:** Teams 6-10  
- **Group C:** Teams 11-15  

### Phase 1: Group Stage (Parallel Physical Hunts)
Each group follows its own unique path of campus location riddles.

- **Round 1:**
  - **Start:** 5 Teams per group (15 total)
  - **Elimination:** Bottom performers eliminated
  - **End:** 4 Teams per group remain (12 total)

- **Round 2:**
  - **Start:** 4 Teams per group
  - **Elimination:** Bottom performers eliminated
  - **End:** 3 Teams per group remain (9 total)

- **Round 3:**
  - **Start:** 3 Teams per group
  - **Elimination:** Bottom performers eliminated
  - **End:** 1 Team per group remains (3 total)

### Phase 2: Convergence (Single Path)
The 3 surviving teams (Group Winners) merge onto a single path.

- **Round 4 (Semi-Finals):**
  - **Start:** 3 Teams
  - **Elimination:** 1 team eliminated
  - **End:** 2 Teams remain

- **Round 5 (Grand Finale):**
  - **Start:** 2 Teams
  - **Elimination:** 1 team eliminated
  - **Winner:** 1 Team claims victory! 🏆

---

## 🎮 Game Flow

### Round Progression
1. **Round Completion** → Team submits correct flag
2. **Transition Screen** → "Round Complete" animation (2 seconds)
3. **Start Round Screen** → Teams get breathing space to strategize
   - Shows current stats (Score, Round, Mistakes)
   - "Start Round X" button
4. **Next Round Begins** → 15-minute timer starts

### Timer System
- **15 minutes per round** (900 seconds)
- Timer **resets** at the start of each new round
- Timer pauses on "Start Round" screen
- **Time runs out** → Red flashing "DISQUALIFIED" screen
- Timer shows **red pulsing warning** under 1 minute

### Answer Format
- All answers use **CTF flag format**: `ACC{...}`
- Examples:
  - `ACC{S0M30N3}`
  - `ACC{Y0UR_T0M0RR0VV}` (multi-word with underscores)
  - `ACC{!I!A!M!}` (final rounds)

---

## Full Riddle List with Answers

### 🔴 GROUP A PATH (Teams 1-5)

#### **Round 1: Tree 99**
**Type:** Physical Hunt + Caesar Cipher

**Encrypted Riddle:**
```
Caesar Shift (+7): AHUUL EE ULHY JHUALLU
```
**Decodes to:** "TREE 99 NEAR CANTEEN"

**Misleading Hint:** "Try looking for Tree 66 first. If that doesn't work, have you considered checking the library basement? (Pro tip: We don't have a basement 🤫)"

**Physical Location:** Tree 99 near the canteen

**Chit at Location:** `ACC{S0M30N3}`

**Answer to Submit:** `ACC{S0M30N3}`

---

#### **Round 2: Broken Door**
**Type:** Physical Hunt + Morse Code

**Encrypted Riddle:**
```
Morse: -... .-. --- -.- . -. / -.. --- --- .-. / -.-. .... ..- .-. -.-. ....
```
**Decodes to:** "BROKEN DOOR CHURCH"

**Misleading Hint:** "If it ain't broke, don't fix it. But what if it IS broke? Then fix it. Wait, no, don't fix it. Just find it. Or don't. Your choice! 🚪"

**Physical Location:** Broken door near the church

**Chit at Location:** `ACC{3RAS3D}`

**Answer to Submit:** `ACC{3RAS3D}`

---

#### **Round 3: Water Pool**
**Type:** Physical Hunt + ROT13 + Reverse

**Encrypted Riddle:**
```
ROT13 + Reverse: LOOPRETAW NAWS
```
**Decodes to:** "SWAN WATERPOOL"

**Misleading Hint:** "The answer is NOT 'swimming pool.' Also NOT 'kiddie pool.' Try checking if there's a pool table somewhere? 🎱💧"

**Physical Location:** Painted water pool near swan statue

**Chit at Location:** `ACC{Y0UR_T0M0RR0VV}`

**Answer to Submit:** `ACC{Y0UR_T0M0RR0VV}`

---

### 🔴 GROUP B PATH (Teams 6-10)

#### **Round 1: Tree 48**
**Type:** Physical Hunt + Base64

**Encrypted Riddle:**
```
Base64: VFJFRSA0OCBCRUhJTkQg V09SS1NIT1A=
```
**Decodes to:** "TREE 48 BEHIND WORKSHOP"

**Misleading Hint:** "Did you know? Trees were invented in 1843. Also, this has nothing to do with trees. Check the parking lot maybe? 🌴"

**Physical Location:** Tree 48 behind the workshop

**Chit at Location:** `ACC{TH3}`

**Answer to Submit:** `ACC{TH3}`

---

#### **Round 2: Girls' Entrance AC**
**Type:** Physical Hunt + Binary

**Encrypted Riddle:**
```
Binary: 01000111 01001001 01010010 01001100 01010011 00100000 01000001 01000011
```
**Decodes to:** "GIRLS AC"

**Misleading Hint:** "Stay cool. Like, literally. Or figuratively. Actually, try the boys' entrance first, we might have put it there by mistake 🤷‍♂️❄️"

**Physical Location:** AC units near girls' entrance

**Chit at Location:** `ACC{W0RLD}`

**Answer to Submit:** `ACC{W0RLD}`

---

#### **Round 3: Watchman Cabin**
**Type:** Physical Hunt + Caesar Cipher

**Encrypted Riddle:**
```
Caesar Shift (+5): BFYNHMFS HFGNS LFYJ
```
**Decodes to:** "WATCHMAN CABIN GATE"

**Misleading Hint:** "Fun fact: Watchmen watch. But do they cabin? Philosophy is hard. Try asking the principal's office maybe? 🤔🏠"

**Physical Location:** Watchman cabin at main gate

**Chit at Location:** `ACC{N33D5_CL3ANS1NG}`

**Answer to Submit:** `ACC{N33D5_CL3ANS1NG}`

---

### 🔴 GROUP C PATH (Teams 11-15)

#### **Round 1: Tree 80**
**Type:** Physical Hunt + Hexadecimal

**Encrypted Riddle:**
```
Hex: 54 52 45 45 20 38 30 20 48 4F 53 54 45 4C 20 4C 41 57 4E
```
**Decodes to:** "TREE 80 HOSTEL LAWN"

**Misleading Hint:** "80 looks like 'BO' if you turn it sideways. Bob might know something. Go find Bob. Good luck finding Bob!"

**Physical Location:** Tree 80 facing hostel lawn

**Chit at Location:** `ACC{3Y35}`

**Answer to Submit:** `ACC{3Y35}`

---

#### **Round 2: Warli Pillar**
**Type:** Physical Hunt + Vigenere Cipher

**Encrypted Riddle:**
```
Vigenere (Key: ART): WSROI OILLWR
```
**Decodes to:** "WARLI PILLAR"

**Misleading Hint:** "Warli rhymes with Barley. Barley is used to make beer. The canteen sells soft drinks. Coincidence? I think NOT! 🍺🎨"

**Physical Location:** Short pillar with Warli art

**Chit at Location:** `ACC{M3A5UR3}`

**Answer to Submit:** `ACC{M3A5UR3}`

---

#### **Round 3: Red Pipes**
**Type:** Physical Hunt + Hex

**Encrypted Riddle:**
```
Base64 + Hex: 52 45 44 20 50 49 50 45 53 20 43 48 55 52 43 48
```
**Decodes to:** "RED PIPES CHURCH"

**Misleading Hint:** "Red pipes... like Mario! Have you tried jumping on them? No? Well, neither have we. YouTube might help! 🔴🔧"

**Physical Location:** Red fire pipes near church

**Chit at Location:** `ACC{Y0UR_L!F35PAN}`

**Answer to Submit:** `ACC{Y0UR_L!F35PAN}`

---

### 🏆 CONVERGENCE PATH (Top 3 Teams)

#### **Round 4: Swan Crown (Semi-Finals)**
**Type:** Physical Hunt + Atbash Cipher

**Encrypted Riddle:**
```
Atbash Cipher: HDZM XILDM OZDM
```
**Decodes to:** "SWAN CROWN LAWN"

**Misleading Hint:** "Swans are just fancy ducks. Have you checked the cafeteria? They might serve duck. Also, crowns are overrated. Try finding a swan with a hat instead! 👑🦆"

**Physical Location:** Swan statue with crown on lawn

**Chit at Location:** `ACC{!I!A!M!}`

**Answer to Submit:** `ACC{!I!A!M!}`

**Decoded Message:** "I AM"

---

#### **Round 5: Electric Pole (Grand Finale)**
**Type:** Physical Hunt + Polybius Square

**Encrypted Riddle:**
```
Polybius Square: 15 34 15 13 44 42 24 13 / 11 34 13 15
```
**Decodes to:** "ELECTRIC POLE"

**Misleading Hint:** "Congratulations on making it this far! Your prize is: this useless hint. The pole might be electric. Or magnetic. Or just a really tall stick. Who knows? We certainly don't! ⚡🎉"

**Physical Location:** Electric pole facing canteen

**Chit at Location:** `ACC{K!RA}`

**Answer to Submit:** `ACC{K!RA}`

**Decoded Message:** "KIRA" - The ultimate Death Note reveal!

---

## Technical Implementation

### Features
- **15-minute countdown timer** per round
- **Disqualification screen** on timeout (red flashing)
- **Start Round button** between rounds for breathing space
- **ACC{} flag format** for all answers
- **Misleading hints** to add challenge
- **Three.js animated background** on home screen
- **Responsive design** for all devices

### Timer Behavior
- Counts down from 15:00
- Pauses on "Start Round" screen
- Resets for each new round
- Shows red warning under 1:00
- Triggers disqualification at 0:00

### Victory Condition
Complete all 5 rounds within the time limit with the correct flags!

🏆 **Winner takes all!** 🏆
