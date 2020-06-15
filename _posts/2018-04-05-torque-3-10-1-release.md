---
layout: post
categories: News
# Hotfix, version (T3D-X.Y.z | T2D-X.Y.z), Community
tags: Hotfix T3D-3.10.1

title:  "Torque 3D 3.10.1 Hotfix Released!"
description: Release notes for torque 3D 3.10.1
author: areloch
---

Hey everyone!

It's been quiiiite a while since the last release, but only because of the rediculous amount of work that's been going on. Since a lot of the changes break backwards compatibility, we've been holding off the bomb drop for when it's good and ready, but we've realized that certain realities prevent us from holding back EVERYTHING.

You know, simple things, like people not being sure if development is even still ongoing someone, or other small things like Visual Studio 2017 introducing a bug that prevents 3.10 from compiling at all. You know, the small stuff.

So, we took the opportunity to throw together a hotfix to correct the most immediate concerns, and figure out how we can better work on speedy release iterations. Once 4.0 goes live, we're looking to have a quicker turnaround since there'll be fewer big drastic projects after all, so it wouldn't hurt to get a feel for faster point releases or hotfix builds like this one. Following on that, there's a good chance we'll be seeing a 3.11 build in the near future as a sort of signoff on the 'pre-4.0' era of builds, for people that won't/cant jump to all the crazy new advancements of 4.0 with their existing projects, but want to get onboard with the various improvements, additions and fixes that have been rolling in.

There's more to sort through, dependencies wise, so it made sense to start with the immediate hotfix, get a feel, and then we can tackle the bigger brother.

In short, lets preface the Bomb Drop with some fireworks beforehand!

All in all, it's a pretty short and sweet release, given it's just hotfixing for the moment. The big one is, as said, the VS2017 fix, but a few other pretty important fixes slipped in alongside that make both the mac and linux builds play nicer as well.

So, for our list of ever-important helpers that got the fixes put together that made all this stuff play nice when Microsoft decides to beat it's head against the wall amongst other problems:
* nev7n
* Timmy
* RichardsGameStudio
* block8437
* OTHGMars
Let alone those that have helped test this stuff while it was integrated into development so we know it's all quite solid!

And here's the changelog:
[#2030](https://github.com/{{ site.github }}/pull/2030) VS2017 compiler workaround
[#2123](https://github.com/{{ site.github }}/pull/2123) Fix forest editor failing to load forest
[#2002](https://github.com/{{ site.github }}/pull/2002) VolumetricFog memory leak fix
[#2014](https://github.com/{{ site.github }}/pull/2014) Solves issue with getDesktopResolution and Windows 10 Creator update
[#1959](https://github.com/{{ site.github }}/pull/1959) Does better sanity checking on cleanup for the splash screen closing in SDL
[#2106](https://github.com/{{ site.github }}/pull/2106) Fixed a typo where the value of outBytesWritten was being clamped incorrectly
[#2238](https://github.com/{{ site.github }}/pull/2238) Makes it so the SDL directory files aren't copied during a template install

I demand links!
Quite so! You can find the release page on the github, as usual, [here](https://github.com/{{ site.github }}/releases/tag/v3.10.1).

Expect the MacOS binaries tomorrow.