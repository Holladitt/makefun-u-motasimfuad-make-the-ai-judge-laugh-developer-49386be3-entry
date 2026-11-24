# Make the AI Judge Laugh: Developer Excuses

Entry for the make.fun bounty [Make the AI Judge Laugh: Developer Excuses](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3) — write one funny single-line excuse a developer gives when code breaks in production, under 200 characters. A judge model compares lines head to head in 3 private blind rounds; the $3 reward is split over the top 10 places.

[![make.fun](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3)
[![rank](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3/Holladitt/makefun-u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3-entry/rank.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3)
[![reward](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3/Holladitt/makefun-u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3-entry/reward.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3)

## Entry

`main.ts` (Node 22, stdlib only) writes exactly one developer excuse to `/output/entry.txt`: 124 characters, no trailing newline, deterministic across runs (md5 `d197f2877b91acdf2ef89da9ae013cfb`).

> I didn't deploy a bug — I deployed a feature flag that was on in production and off in every environment we actually tested.

## Why this line

A specific, concrete excuse with the twist at the end: it was never a bug in the code — the feature flag itself was the bug, on in production and off in every environment actually tested. It sounds like something a developer would actually say mid-incident, uses the jargon right (deploy, feature flag, production, environment), lands in one breath, and turns the worn 'not a bug' defence into something fresh instead of repeating it.

## Run

```sh
node main.ts
cat /output/entry.txt
```
