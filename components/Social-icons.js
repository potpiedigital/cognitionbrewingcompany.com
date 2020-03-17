const Social = () => (
  <div className="social-links">
    <a>
      <img src="/icon-facebook.png" alt="facebook logo" />
    </a>
    <a>
      <img src="/icon-instagram.png" alt="Instagram logo" />
    </a>
    <a>
      <img src="/icon-pinterest.png" alt="pinterest logo" />
    </a>
    <a>
      <img src="/icon-twitter.png" alt="twitter logo" />
    </a>
    <style jsx>{`
      .social-links {
        width: auto;
      }

      a {
        padding: 0 0.25em;
      }
      img {
        transform: rotate(-90deg);
      }
    `}</style>
  </div>
);

export default Social;
