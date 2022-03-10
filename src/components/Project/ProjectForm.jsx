import Input from "../form/input/Input";
import Select from "../form/select/Select";
import SubmitButton from "../form/submit/SubmitButton";
import select from "./ProjectForm.module.css";

function ProjectForm({btnText}) {
  return (
    <form className={select.form}>
      <Input
        type="text"
        text="Nome do Projeto"
        name="name"
        placeholder="Insira o nome do projeto"
      />

      <Input
        type="number"
        text="Orçamento do Projeto"
        name="baduget"
        placeholder="Insira o orçamento total"
      />
      <Select name="category_id" text="Selecione uma categoria" />

      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm;
