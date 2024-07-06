
import './FormSection.css'; // Certifique-se de importar o arquivo de estilo CSS


const FormSection = () => {

  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdKry_BjDfoesmbzc-IzRZGLVhA2uJ_Id8uCcBAbz6rm8Kr7A/viewform?embedded=true";

  const handleSubmit = event => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário

  };


  return (
    <div className="form-background">
      <div className="form-section-title">
        <h2 className="form-title">PyCasa Download</h2>
       
        <p>Clique agora no botão para responder o formulário e ter acesso ao nosso programa</p>
      </div>
      <section className="form-section">
        <form onSubmit={handleSubmit}>
          <div>
            <button className='form-btn'>Preencher formulário</button>
          </div>
          {/* <div class="form__group field">
              <input type="input" class="form__field" placeholder="Nome" name="name" id='name' required />
              <label for="name" class="form__label">Nome Completo</label>
          </div>

          <div class="form__group field">
            <input type="input" class="form__field" placeholder="email" name="email" id='email' required />
            <label for="email" class="form__label">E-mail</label>
          </div>

          <div class="form__group field">
            <input type="input" class="form__field" placeholder="escolaridade" name="escolaridade" id='escolaridade' required />
            <label for="escolaridade" class="form__label">Escolaridade</label>
          </div>

          <div class="form__group field">
            <input type="input" class="form__field" placeholder="estado" name="estado" id='estado' required />
            <label for="estado" class="form__label">Estado</label>
          </div>

          <div class="form__group field">
            <input type="input" class="form__field" placeholder="cidade" name="cidade" id='cidade' required />
            <label for="cidade" class="form__label">Cidade</label>
          </div>

          <div>
            <button className='form-btn'>Downloads</button>
          </div> */}

        </form>



      </section>

    </div>
  );
};

export default FormSection;
