# stdlib-waves

This project showcases the use of `@stdlib/plot` API to visualize a sine wave generated by `@stdlib/simulate-iter-sinewave` function. Users can modify the key parameters to see how they affect the waveform.

## Parameters

The waveform is generated using the following parameters:
  - Amplitude: Peak value of the sine wave.
  - Period: Number of iterations before a sine wave repeats.
  - Iterations: Number of iterations
  - Sampling Rate: Number of samples per second (Hz)

The wave duration and frequency is calculate using the following formulas:
  - Duration (in seconds) = iterations / sampling rate
  - Frequency (in Hz) = sampling rate / period

## License

MIT © headlessNode
