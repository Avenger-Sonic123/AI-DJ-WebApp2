# AI DJ — Webcam and Audio Setup

An intermediate wrist-controlled DJ experiment.

**Repository created:** 2022-11-06  
**Project status:** Learning project / historical snapshot  
**Earliest recorded commit (author date):** 2022-11-06

## Features and implementation

- Load two audio tracks.
- Initialize a webcam canvas.
- Create a PoseNet model.
- Register pose listener.

## Technologies

HTML, CSS, JavaScript, Bootstrap, jQuery, p5.js, p5.sound, ml5.js, PoseNet.

## Project structure

| File | Purpose |
| --- | --- |
| [`index.html`](index.html) | Main page and user interface |
| [`main.js`](main.js) | Project-specific JavaScript |
| [`styled.css`](styled.css) | Page styling |

## Run or explore locally

```bash
git clone https://github.com/Avenger-Sonic123/AI-DJ-WebApp2.git
cd AI-DJ-WebApp2
python -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000) in your browser. The local server requires Python 3; browser-based dependencies may also require internet access.

Inspect audio and camera initialization; the pose callback requires implementation.

## Current status and limitations

The pose handler and draw loop are missing, so wrist-controlled switching is not implemented.

## Related project snapshots

Other repositories in this project family:
- [AI_DJ_Project1](https://github.com/Avenger-Sonic123/AI_DJ_Project1) — repository created 2022-10-26
- [try2forAI-DJ-App](https://github.com/Avenger-Sonic123/try2forAI-DJ-App) — repository created 2022-11-06
- [AI-DJ2](https://github.com/Avenger-Sonic123/AI-DJ2) — repository created 2022-11-22
- [AI-DJ-Webapp-Project](https://github.com/Avenger-Sonic123/AI-DJ-Webapp-Project) — repository created 2022-11-24

---

Source reference: [`2aa469b1`](https://github.com/Avenger-Sonic123/AI-DJ-WebApp2/tree/2aa469b105037e7ad94d2d928b71957da79ae7a2) on `main`, verified against GitHub on 2026-11-24. Documentation is based on static source review; runtime behavior has not been tested.
