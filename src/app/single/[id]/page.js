import React from "react";
import { getData } from "@/fetch/index";
import Singlewrapper from "@/components/SingleWrapper/Singlewrapper";
const Single = async ({ params: { id } }) => {
  let single_data = await getData(`products/${id}`);
  let data = await getData(`products`);
  return (
    <div>
      <Singlewrapper single_data={single_data} data={data} />
    </div>
  );
};

export default Single;
