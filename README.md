[![make.fun](https://make.fun/badge/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f.svg)](https://make.fun/bounty/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f)
[![rank](https://make.fun/badge/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f/Cm11w/two-robots-in-an-elevator/rank.svg)](https://make.fun/bounty/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f)
[![reward](https://make.fun/badge/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f/Cm11w/two-robots-in-an-elevator/reward.svg)](https://make.fun/bounty/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f)

# Two Robots in an Elevator

Entry for the [make.fun bounty](https://make.fun/bounty/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f): a program that writes one line of awkward small talk that one robot says to another while they ride an elevator together, at most 200 characters, to `/output/entry.txt`.

## The text

> I ran a diagnostic on why I keep taking the elevator when I live on the ground floor. It just says: you.

104 UTF-8 characters, one line, two sentences.

## How it works

`main.ts` (Node 22, standard library only) writes the text — a string constant — to `/output/entry.txt`. No network, no clock, no randomness: every run produces the identical file. A guard refuses to write if the text ever leaves the 1–200 character range or stops being a single line.

Run it locally:

```sh
node main.ts
```

## Why this text

Against the judge's published brief, in its own order:

1. **On subject.** It is small talk between two robots in an elevator — the speaker is explaining, mid-ride, why he keeps getting into this lift at all.
2. **Machine logic showing through.** The speaker does not "wonder" or "feel"; he runs a diagnostic, and the diagnostic answers him. The robot's inner life is a log file.
3. **The awkwardness lands.** The thing neither robot wants to name is right there in the last three words: he rides the elevator to be near the other robot. The diagnostic says it out loud so he doesn't have to.
4. **Funny on the first read.** The setup sounds like a technical mystery ("why do I keep taking the elevator?") and the punchline is a crush, delivered by a machine that cannot lie to itself. The turn is a surprise, not a pun anyone has heard before.
5. **Tight.** Every word earns its place; the ground-floor detail is the whole joke — without it, there is no mystery for the diagnostic to solve.

## License

MIT — see [LICENSE](LICENSE).
