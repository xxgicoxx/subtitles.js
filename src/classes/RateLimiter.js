module.exports = class {
  constructor(requestsPerSecond) {
    this.remaining = requestsPerSecond;
  }

  setRemaining(remaining) {
    this.remaining = parseInt(remaining, 10);
  }

  async limitRate() {
    if (this.remaining > 0) return;

    // eslint-disable-next-line no-promise-executor-return
    await new Promise((r) => setTimeout(r, 1000));
  }
};
