const Contact = () => {
  return (
    <section className="mt-12 bg-green-600 py-24">
      <div className="flex flex-col items-center gap-12">
        <div>
          <h2 className="text-6xl font-bold text-white">Contact</h2>
        </div>
        <div className="flex flex-col items-center gap-6">
          <div>
            <h3 className="text-3xl text-white">Connect With Me 📧</h3>
          </div>
          <div>
            <button className="rounded-xl border-2 border-solid border-white px-3 py-2 text-white">
              Call to Action
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
