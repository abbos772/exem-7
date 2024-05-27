import React from "react";
import { getData } from "@/fetch/index";
import Singlewrapper from "@/components/SingleWrapper/Singlewrapper";
const Single = async ({ params: { id } }) => {
  let data = await getData(`products/${id}`);
  return (
    <div>
      <Singlewrapper data={data} />
    </div>
  );
};

export default Single;
