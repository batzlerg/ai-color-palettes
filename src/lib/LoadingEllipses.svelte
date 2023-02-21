<span class="dot dot1">.</span>
<span class="dot dot2">.</span>
<span class="dot dot3">.</span>

<style>
  .dot {
    font-size: 2rem;
    line-height: 0;
  }

  .dot1 {
    animation: visibility 1s linear infinite;
  }

  @keyframes visibility {
    0% {
      opacity: 1;
    }
    33% {
      opacity: 0.4;
    }
    66% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }

  .dot2 {
    animation: visibility2 1s linear infinite;
  }

  @keyframes visibility2 {
    0% {
      opacity: 0.4;
    }
    33% {
      opacity: 1;
    }
    66% {
      opacity: 0.4;
    }
    100% {
      opacity: 0.4;
    }
  }

  .dot3 {
    animation: visibility3 1s linear infinite;
  }

  @keyframes visibility3 {
    0% {
      opacity: 0.4;
    }
    33% {
      opacity: 0.4;
    }
    66% {
      opacity: 1;
    }
    100% {
      opacity: 0.4;
    }
  }
</style>
