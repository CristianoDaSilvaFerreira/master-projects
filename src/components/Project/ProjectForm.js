function ProjectForm() {
  return (
    <form>
      <div>
        <input type="text" placeholder="Insira o nome do projeto"></input>
      </div>
      <div>
        <input type="number" placeholder="Insira o orçamento do total"></input>
      </div>
      <div>
        <select name="category_id">
          <option disabled select>
            Selecioner uma categoria
          </option>
        </select>
      </div>
      <div>
        <input type="submit" value="Criar projeto" />
      </div>
    </form>
  );
}

export default ProjectForm;
