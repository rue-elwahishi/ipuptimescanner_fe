import React, { useCallback, useEffect, useState } from "react";
// import { ClientsService } from "../../services/clients.service";
import { useErrorStatus } from "../error_handler/error_handler";
import instance from "../services/axios_instance";


// a reusable form hook for all forms
export const useForm = (initialState, callback) => {
  const [inputs, setInputs] = useState(initialState);

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    console.log(inputs);
    if (callback) callback();
  };

  const handleInputChange = (e) => {
    console.log(e.target.name, e.target.value);
    e.persist();
    const chunks = e.target.name.split(".");
    chunks.length == 1 &&
      setInputs((inputs) => ({ ...inputs, [e.target.name]: e.target.value }));

    if (chunks.length > 1) {
      var original_ref = inputs;
      var our_reference = original_ref;

      chunks.forEach((attrib_name, index) => {
        if (our_reference[attrib_name] && chunks.length - 1 != index) {
          our_reference = our_reference[attrib_name];
        }
      });
      var target = chunks[chunks.length - 1];
      our_reference[target] = e.target.value;
      setInputs((inputs) => ({ ...inputs, ...original_ref }));
    }
  };
  return {
    setInputs,
    // handleSubmit,
    handleInputChange,
    inputs,
  };
};

// Query hook for handling API status code
export const useQuery = (fn) => {
  const { setErrorStatusCode } = useErrorStatus();
  const [res, setRes] = useState({
    data: null,
    complete: false,
    pending: false,
    error: false,
  });
  const [req, setReq] = useState();

  useEffect(() => {
    if (!req) return;
    setRes({
      data: null,
      pending: true,
      complete: false,
    });
    instance(req)
      .then((response) => {
        if (response.status != 200) {
          setErrorStatusCode(response.status);
        } else {
          console.log(response, response.data);
          setRes({
            data: response.data,
            pending: false,
            complete: true,
          });
        }
      })
      .catch((error) => {
        console.log(error, "error");
      });
  }, [req]);

  return [res, (...args) => setReq(fn(...args))];
};
