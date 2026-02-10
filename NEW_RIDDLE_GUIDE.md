# 🕵️ New Riddle & Encryption Guide (2026)

## 📌 Instructions for Organizers
1. **Website**: Displays the **"Encrypted Riddle"**. Teams must decrypt this to find the location.
2. **Location**: Hides a **Physical Chit**.
3. **Chit**: Contains the **"Encrypted Flag"**. Teams must decrypt this key to get the answer.
4. **Submission**: Teams enter the **Decrypted Flag** (e.g., `ACC{M0RTAL1TY}`) into the website.

---

## 🟥 Path 1 (Group A)

### 1. Tree 99
- **Riddle (Plain)**:
  > Two nines sit on my skin, side by side,
  > A double mirror you can’t divide.
  > I stand where hunger meets its cure,
  > Watching snack runs, loud and sure.
- **Website Encryption (Caesar +3 - Simple)**:
  `Wzr qlqhv vlw rq pb vnln, vlgh eb vlgh, D grxeoh pluurxu brx fdq’w glylgh. L vwdqg zkhuh kxqjhu phhwv lwv fxuh, Zdwfklqj vqdfn uxqv, orxg dqg vxuh.`
- **Answer (Flag)**: `ACC{M0RTAL1TY}`
- **Chit Encryption (Reverse)**: `}YT1LATR0M{CCA`

### 2. Broken Door (Church)
- **Riddle (Plain)**:
  > Where small prayers and laughter grow,
  > Wood and glass in quiet show.
  > Not fully closed, not fully free—
  > A cracked old door is where I’ll be.
- **Website Encryption (Hex)**:
  `57 68 65 72 65 20 73 6d 61 6c 6c 20 70 72 61 79 65 72 73 20 61 6e 64 20 6c 61 75 67 68 74 65 72 20 67 72 6f 77 2c 0a 57 6f 6f 64 20 61 6e 64 20 67 6c 61 73 73 20 69 6e 20 71 75 69 65 74 20 73 68 6f 77 2e 0a 4e 6f 74 20 66 75 6c 6c 79 20 63 6c 6f 73 65 64 2c 20 6e 6f 74 20 66 75 6c 6c 79 20 66 72 65 65 e2 80 94 0a 41 20 63 72 61 63 6b 65 64 20 6f 6c 64 20 64 6f 6f 72 20 69 73 20 77 68 65 72 65 20 49 e2 80 99 6c 6c 20 62 65 2e`
- **Answer (Flag)**: `ACC{AN5W3R5}`
- **Chit Encryption (Atbash)**: `ZXX{ZM5D3I5}`

### 3. Empty Blue Pool + Swan
- **Riddle (Plain)**:
  > I hold the sky but never rain,
  > Painted blue yet dry I remain.
  > No splash, no wave, no swimmer’s call,
  > Still I’m a pool, round and small.
  > Beside a royal bird in white I stay —
  > Find the empty blue, you’re on the way.
- **Website Encryption (Base64)**:
  `SSBob2xkIHRoZSBza3kgYnV0IG5ldmVyIHJhaW4sClBhaW50ZWQgYmx1ZSB5ZXQgZHJ5IEkgcmVtYWluLgpObyBzcGxhc2gsIG5vIHdhdmUsIG5vIHN3aW1tZXI6cyBjYWxsLApTdGlsbCBJ4oCZbSBhIHBvb2wsIHJvdW5kIGFuZCBzbWFsbC4KQmVzaWRlIGEgcm95YWwgYmlyZCBpbiB3aGl0ZSBJIHN0YXkg4oCUCkZpbmQgdGhlIGVtcHR5IGJsdWUsIHlvdXLigJlyZSBvbiB0aGUgd2F5Lg==`
- **Answer (Flag)**: `ACC{1NK}`
- **Chit Encryption (Caesar +1)**: `BDD{2OL}`

---

## 🟦 Path 2 (Group B)

### 1. Tree 48
- **Riddle (Plain)**:
  > Almost half a hundred Etched into skin.
  > Near stone faith and crafted futures,
  > I stand between prayer and practice.
- **Website Encryption (Reverse Words)**:
  `tsomlA flah a derdnuh dehctE otni niks. raeN enots htiaf dna detfarc serutuf, I dnats neewteb reyarp dna ecitcarp.`
- **Answer (Flag)**: `ACC{3T3RN1TY}`
- **Chit Encryption (Base64)**: `QUNDezNUM1JOMVRZfQ==`

### 2. Girls’ Entrance AC
- **Riddle (Plain)**:
  > A row of metal lungs,
  > Breathing for others.
  > Hugging the wall by the girls' way in.
- **Website Encryption (Binary)**:
  `01000001 00100000 01110010 01101111 01110111 00100000 01101111 01100110 00100000 01101101 01100101 01110100 01100001 01101100 00100000 01101100 01110101 01101110 01100111 01110011 00101100 00100000 01000010 01110010 01100101 01100001 01110100 01101000 01101001 01101110 01100111 00100000 01100110 01101111 01110010 00100000 01101111 01110100 01101000 01100101 01110010 01110011 00101110 00100000 01001000 01110101 01100111 01100111 01101001 01101110 01100111 00100000 01110100 01101000 01100101 00100000 01110111 01100001 01101100 01101100 00100000 01100010 01111001 00100000 01110100 01101000 01100101 00100000 01100111 01101001 01110010 01101100 01110011 00100111 00100000 01110111 01100001 01111001 00100000 01101001 01101110 00101110`
- **Answer (Flag)**: `ACC{R3M3MB3R5}`
- **Chit Encryption (Reverse)**: `}5R3BM3M3R{CCA`

### 3. Watchman Cabin
- **Riddle (Plain)**:
  > I'm the first test before you pass,
  > A tiny room where strangers are asked.
  > I don't study, yet I know every face,
  > I sit at the edge of the campus space.
- **Website Encryption (Caesar +13 / ROT13)**:
  `V'z gur svefg grfg orsber lbh cnff, N gval ebbz jurer fgenatref ner nfxrq. V qba'g fghql, lrg V xabj rirel snpr, V fvg ng gur rqtr bs gur pnzchf fcnpr.`
- **Answer (Flag)**: `ACC{NAM35}`
- **Chit Encryption (Hex)**: `41 43 43 7b 4e 41 4d 33 35 7d`

---

## 🟩 Path 3 (Group C)

### 1. Tree 80
- **Riddle (Plain)**:
  > A circle dragging a tail on bark,
  > Near the hostel where eyes often park.
  > Around the World in a famous race—
  > Find the tree that marks the place.
- **Website Encryption (Morse)**:
  `.- -.-. .. .-. -.-. .-.. . / -.. .-. .- --. --. .. -. --. / .- / - .- .. .-.. / --- -. / -... .- .-. -.- --..-- / -. . .- .-. / - .... . / .... --- ... - . .-.. / .-- .... . .-. . / . -.-- . ... / --- ..-. - . -. / .--. .- .-. -.- .-.-.-`
- **Answer (Flag)**: `ACC{0BL1V10N}`
- **Chit Encryption (Caesar +7)**: `HJJ{0IS1C10U}`

### 2. Warli Painting
- **Riddle (Plain)**:
  > Stories dance on my skin
  > Without moving.
  > I speak in tribes,
  > Not words.
  > Law watches me from across.
- **Website Encryption (Base64)**:
  `U3RvcmllcyBkYW5jZSBvbiBteSBza2luCldpdGhvdXQgbW92aW5nLgpJIHNwZWFrIGluIHRyaWJlcywKTm90IHdvcmRzLgpMYXcgd2F0Y2hlcyBtZSBmcm9tIGFjcm9zcy4=`
- **Answer (Flag)**: `ACC{F0LL0VVS}`
- **Chit Encryption (Atbash)**: `ZXX{U0OO0EEH}`

### 3. Tree Behind Foyer
- **Riddle (Plain)**:
  > Leave the foyer’s noisy spree,
  > Walk toward the smell of coffee.
  > Behind it all, away from the queue—
  > A solitary tree waits for you.
- **Website Encryption (Reverse Entire)**:
  `.uoy rof stiaw eert yratilos A —eueuq eht morf yawa ,lla ti dniheB .eeffoc fo llems eht drawot klaW ,eerps ysion s’reyof eht evaeL`
- **Answer (Flag)**: `ACC{WR1T1NG}`
- **Chit Encryption (Base64)**: `QUNDe1dSMVQxTkd9`

## 🏆 Semi-Finals (Round 4)
- **Flag**: `ACC{GOD_OF_THE_WORLD}` (or `ACC{GODOFTHEWORLD}`)
- **Location**: POLE_TREE_7 (Pole next to Tree 7)
- **Riddle (Plain)**: "Not a flag, yet I'm tied up high, A faded ribbon that forgot to fly. By the count that follows roku, I flutter for those who notice small things. Find the cloth that chose to stay — The next number after roku shows the way"
- **Riddle (Encrypted - Vigenere Key: KIRA)**: "Xwk a ptrg, imk I'w bzen cg hsoy, A piuen zzblwe trik fyzxod bf fvg. Sy dpv cycet dprt pwclyej rysl, I ptltdmi fyz khyav wrw eodqte curlv byixoj. Fsvu trm tlyby trik crwje dw jtkg — Kho vvxd vlmlmi apbvr bwbu cpfwc bye gip"


## 👑 Grand Finale (Round 5)
- **Flag**: `ACC{F0UND}`
- **Location**: POLYTECHNIC_BASKET (Metal bowl/planter behind Polytechnic building)
- **Riddle (Plain)**: "I'm small but fenced like I'm grand, A leafy child in a learning land. Beside the halls where diplomas grow, I rise up quiet, slow and low. Left behind the building that grants the scroll — Find me in a metal bowl."
- **Riddle (Encrypted - Morse + Caesar)**: `.--. .----. - / --.. - .... ... ... / .. -... .- / -- .-.. ..- .--- .-.. -.- / ... .--. .-. .-.. / .--. .----. - / -. -.-- .... ..- -.- --..-- / .... / ... .-.. .... -- ..-. / .--- --- .--. ... -.- / .--. ..- / .... / ... .-.. .... -.-- ..- .--. ..- -. / ... .... ..- -.- .-.-.- / .. .-.. --.. .--. -.- .-.. / .- --- .-.. / --- .... ... ... --.. / -.. --- .-.. -.-- .-.. / -.- .--. .-- ... ...- - .... --.. / -. -.-- ...- -.. --..-- / .--. / -.-- .--. --.. .-.. / -... .-- / -..- -... .--. .-.. .- --..-- / --.. ... ...- -.. / .... ..- -.- / ... ...- -.. .-.-.- / ... .-.. -- .- / .. .-.. --- .--. ..- -.- / .- --- .-.. / .. -... .--. ... -.- .--. ..- -. / .- --- .... .- / -. -.-- .... ..- .- --.. / .- --- .-.. / --.. .--- -.-- ...- ... ... / / -- .--. ..- -.- / - .-.. / .--. ..- / .... / - .-.. .- .... ... / .. ...- -.. ... .-.-.-`
- **Encryption Steps**: Plain → Caesar(+7) → Morse Code
