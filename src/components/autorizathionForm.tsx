import { useForm } from "react-hook-form";
import FormInput from "./FormInput";

import { CreateDocument } from "../api/auth";

import { useState } from "react";
import Modal from "./Modal";

export default function AutorizathionForm() {
  const [isModalVisible, setModalVisible] = useState(false);

  const oneFatherTwoSons = {
    templateName: "autorizathion.docx",
    pronoun: "Yo",
    age_pronoun: "mayor de edad",
    beg_pronoun: "ruego",
    country_pronoun: "mi",
    extend_pronoun: "extiendo",
    signature_pronoun: "firmo",
    document: "AUTORIZO",
    "F)": "",
    son_pronoun: " mis hijos",
    can: "puedan",
    travel_pronoun: "viajen",
    and: "y",
  };

  const oneFatherOneSon = {
    templateName: "autorizathion.docx",
    pronoun: "Yo",
    age_pronoun: "mayor de edad",
    beg_pronoun: "ruego",
    country_pronoun: "mi",
    extend_pronoun: "extiendo",
    signature_pronoun: "firmo",
    document: "AUTORIZO",
    "F)": "",
    son_pronoun: "mi hijo",
    can: "pueda",
    travel_pronoun: "viaje",
    and: "",
  };

  const twoFathersTwoSons = {
    templateName: "autorizathion.docx",
    age_pronoun: "mayor de edad",
    pronoun: "Nosotros",
    beg_pronoun: "rogamos",
    country_pronoun: "nuestro",
    extend_pronoun: "extendemos",
    signature_pronoun: "firmamos",
    document: "AUTORIZAMOS",
    "F)": "F)",
    son_pronoun: "nuestros hijos",
    can: "puedan",
    travel_pronoun: "viajen",
    and: "y",
  };

  const template = {
    templateName: "autorizathion.docx",
  };

  const twoFathersOneSons = {
    templateName: "autorizathion.docx",
    age_pronoun: "mayor de edad",
    pronoun: "Nosotros",
    beg_pronoun: "rogamos",
    country_pronoun: "nuestro",
    extend_pronoun: "extendemos",
    signature_pronoun: "firmamos",
    document: "AUTORIZAMOS",
    "F)": "F)",
    son_pronoun: "nuestro hijo",
    can: "pueda",
    travel_pronoun: "viajen",
    and: "",
  };

  let selectedObject: {
    son_pronoun?: string;
    can?: string;
    travel_pronoun?: string;
    and?: string;
    templateName?: string;
    pronoun?: string;
    age_pronoun?: string;
    beg_pronoun?: string;
    country_pronoun?: string;
    extend_pronoun?: string;
    signature_pronoun?: string;
    document?: string;
    "F)"?: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleInputChange = (event: { target: { value: any } }) => {
    const inputValue = event.target.value;

    switch (inputValue) {
      case "one father and one son":
        selectedObject = oneFatherOneSon;
        break;
      case "two fathers and one son":
        selectedObject = twoFathersOneSons;
        break;
      case "one father and two sons":
        selectedObject = oneFatherTwoSons;
        break;
      case "two fathers and two sons":
        selectedObject = twoFathersTwoSons;
        break;
      default:
        break;
    }
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const onSubmit = handleSubmit(async (values) => {
    console.log(selectedObject);

    const combinedValues = {
      ...values,
      ...selectedObject,
      ...template,
    };

    console.log(combinedValues);
    CreateDocument(combinedValues);
    reset();
    toggleModal();
  });

  return (
    <>
      <Modal isVisible={isModalVisible} onClose={toggleModal} />

      <form
        id="autorizacion"
        className="bg-white shadow-md rounded-md p-4 space-y-4 w-1/2"
        onSubmit={onSubmit}
      >        
        <label
          className={
            "block text-lg font-medium leading-6 text-gray-900 uppercase text-center py-4"
          }
        >
          Formulario de autorizacion para salir del pais
        </label>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Side */}
          <div className="px-4 py-2">
            <FormInput
              className="uppercase"
              labelName="Información del padre"
              values={register("name")}
              type="text"
              name="name"
              id="name"
              placeholder="Nombre del padre"
              required={false}
            />

            <FormInput
              values={register("work")}
              type="text"
              name="work"
              id="work"
              placeholder="Profesion"
              required={false}
            />

            <FormInput
              values={register("nationality")}
              type="text"
              name="nationality"
              id="nationality"
              placeholder="Nacionalidad"
              required={false}
            />

            <FormInput
              labelClass="hidden"
              values={register("address")}
              type="text"
              name="address"
              id="address"
              placeholder="Domicilio"
              required={false}
            />

            <FormInput
              labelClass="hidden"
              values={register("id")}
              type="text"
              name="id"
              id="id"
              placeholder="id"
              required={false}
            />

            <select
              className="p-2 mt-2 rounded-xl border text-black"
              id="marital_status"
              {...register("marital_status")}
            >
              <option value={"soltero"}></option>
              <option value={"soltero"}>soltero</option>
              <option value={"soltero en union libre"}>
                soltero en union libre
              </option>
              <option value={"casado"}>casado</option>
            </select>
          </div>

          {/* Right Side */}
          <div className="px-4 py-2">
            <FormInput
              className="uppercase"
              labelName="Información de la madre"
              values={register("name1")}
              type="text"
              name="name1"
              id="name1"
              placeholder="Nombre de la madre"
              required={false}
            />

            <FormInput
              values={register("work1")}
              type="text"
              name="work1"
              id="work1"
              placeholder="Profesion"
              required={false}
            />

            <FormInput
              values={register("nationality1")}
              type="text"
              name="nationality1"
              id="nationality1"
              placeholder="Nacionalidad"
              required={false}
            />

            <FormInput
              labelClass="hidden"
              values={register("address1")}
              type="text"
              name="address1"
              id="address1"
              placeholder="Domicilio"
              required={false}
            />

            <FormInput
              labelClass="hidden"
              values={register("id1")}
              type="text"
              name="id1"
              id="id1"
              placeholder="id"
              required={false}
            />

            <select
              className="p-2 mt-2 rounded-xl border text-black"
              id="marital_status1"
              {...register("marital_status1")}
            >
              <option value={""}></option>
              <option value={"soltera"}>soltera</option>
              <option value={"soltera en union libre"}>
                soltera en union libre
              </option>
              <option value={"casada"}>casada</option>
            </select>
          </div>
        </div>

        <div className="flex px-2">
          <div className="w-1/3 mx-2">
            <FormInput
              className="uppercase"
              labelName="Datos del menor"
              values={register("son_name", { required: true })}
              type="text"
              name="son_name"
              id="son_name"
              placeholder="Nombre del menor"
              required
            />
          </div>
          <div className="w-1/3 mx-2">
            <FormInput
              labelName="1"
              labelClass="text-white"
              values={register("document_number", { required: true })}
              type="text"
              name="document_number"
              id="document_number"
              placeholder="Identidad del menor"
              required
            />
          </div>
          <div className="w-1/3 mx-2">
            <select
              className="p-2 mt-8 rounded-xl border text-black w-full"
              id="ID_son"
              {...register("document_type")}
            >
              <option value={"Acta de nacimiento"}></option>
              <option value={"Identidad"}>Identidad</option>
              <option value={"Pasaporte"}>Pasaporte</option>
              <option value={"Acta de nacimiento"}>Acta de nacimiento</option>
            </select>
          </div>
        </div>

        {/* Segundo menor */}
        <div className="flex px-2">
          <div className="w-1/3 mx-2 mb-4">
            <FormInput
              className="uppercase"
              values={register("son_name1")}
              type="text"
              name="son_name1"
              id="son_name1"
              placeholder="Nombre del menor"
              required={false}
            />
          </div>
          <div className="w-1/3 mx-2">
            <FormInput
              values={register("document_number1")}
              type="text"
              name="document_number1"
              id="document_number1"
              placeholder="Identidad del menor"
              required={false}
            />
          </div>
          <div className="w-1/3 mx-2">
            <select
              className="p-2 mt-2 rounded-xl border text-black w-full"
              id="ID_son1"
              {...register("document_type1")}
            >
              <option value={""}></option>
              <option value={"Identidad"}>Identidad</option>
              <option value={"Pasaporte"}>Pasaporte</option>
              <option value={"Acta de nacimiento"}>Acta de nacimiento</option>
            </select>
          </div>
        </div>

        {/* Informacion del documento*/}
        <div className="flex px-2">
          <div className="w-1/3 mx-2">
            <FormInput
              className="uppercase"
              labelName="Información general"
              values={register("document_name", { required: true })}
              type="text"
              name="document_name"
              id="document_name"
              placeholder="Nombre del documento"
              required
            />
          </div>

          <div className="w-1/3 mx-2">
            <FormInput
              labelName="1"
              labelClass="text-white"
              values={register("destination", { required: true })}
              type="text"
              name="destination"
              id="destination"
              placeholder="Pais de destino"
              required
            />
          </div>

          <div className="w-1/3 mx-2">
            <select
              className="p-2 mt-8 rounded-xl border text-black text-md w-full"
              id="autorizathion_type"
              {...register("autorizathion_type")}
              onChange={handleInputChange}
            >
              <option value={"one father and one son"}></option>
              <option value={"one father and one son"}>
                padre (1) y menor (1)
              </option>
              <option value={"two fathers and one son"}>
                padres(2) y menor (1)
              </option>
              <option value={"one father and two sons"}>
                padre (1) y menores (2)
              </option>
              <option value={"two fathers and two sons"}>
                padres(2) y menores (2)
              </option>
            </select>
          </div>
        </div>

        <div className="flex px-2 pb-4">
          <div className="w-1/3 mx-2">
            <FormInput
              values={register("city", { required: true })}
              type="text"
              name="city"
              id="city"
              placeholder="ciudad de la firma"
              required
            />
          </div>
          <div className="w-1/3 mx-2">
            <FormInput
              values={register("department", { required: true })}
              type="text"
              name="department"
              id="department"
              placeholder="departamento"
              required={false}
            />
          </div>
          <div className="w-1/3 mx-2">
            <FormInput
              values={register("date", { required: true })}
              type="text"
              name="date"
              id="date"
              placeholder="dia"
              required={false}
            />
          </div>
        </div>

        <button
          type="submit"
          className="flex w-1/3 mx-auto py-2 justify-center rounded-xl bg-gray-400 uppercase text-white hover:scale-110 duration-300"
        >
          Crear
        </button>
      </form>
    </>
  );
}
