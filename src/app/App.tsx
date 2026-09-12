function App() {
  return (
    <div>
      <div className='text-2xl font-sans'>oswald</div>
      <div className='text-[36px] font-sans font-extralight'>Phone</div>
      <p className='font-georgia'>Georgia</p>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96708.3111418599!2d-73.969231!3d40.7590615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2sManhattan%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sid!4v1789209474742!5m2!1sen!2sid'
        width='600'
        height='450'
        style={{ border: 0 }}
        allowFullScreen={false}
        loading='lazy'
        referrerPolicy='strict-origin-when-cross-origin'
      ></iframe>
    </div>
  );
}

export default App;
