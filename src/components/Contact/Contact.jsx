function Contact() {
  return (
    <aside>
      <h2>Fale conosco</h2>

      <p>
        Preencha o formulário abaixo e em breve responderemos como todo o nosso
        empenho. Não se cale mais, vença o silêncio.
      </p>

      <form>
        <fieldset>
          <legend>Informações básicas</legend>

          <div aria-roledescription="group">
            <label htmlFor="form-name">Nome</label>
            <input id="form-name" type="text" />
          </div>

          <div aria-roledescription="group">
            <label htmlFor="form-email">Email</label>
            <input id="form-email" type="email" />
          </div>

          <div aria-roledescription="group">
            <label htmlFor="form-tel">Telefone</label>
            <input id="form-tel" type="tel" />
          </div>

          <div aria-roledescription="group">
            <label htmlFor="form-sub">Assunto</label>
            <input id="form-sub" type="text" />
          </div>

          <div aria-roledescription="group">
            <label htmlFor="form-msg">Mensagem</label>
            <textarea name="" id="form-msg" cols="30" rows="10"></textarea>
          </div>
        </fieldset>

        <button>Romper meu silêncio</button>
      </form>
    </aside>
  );
}

export default Contact;
