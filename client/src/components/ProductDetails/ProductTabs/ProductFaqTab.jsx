import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ProductFaqTab = ({ faqs }) => {

  return (
    <div>

      <h2 className="text-2xl font-bold mb-8">
        Frequently Asked Questions
      </h2>

      {!faqs || faqs.length === 0 ? (

        <div className="border border-gray-200 rounded-3xl p-8 text-center">
          <p className="text-gray-500 text-lg">
            No frequently asked questions available for this product.
          </p>
        </div>

      ) : (

        <div className="space-y-4">

          {faqs.map((faq) => (

            <Accordion
              key={faq.id}
              sx={{
                borderRadius: "18px",
                boxShadow: "none",
                border: "1px solid #E5E7EB",
                overflow: "hidden",
                "&:before": {
                  display: "none",
                },
              }}
            >

              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
              >
                <span className="font-semibold text-lg">
                  {faq.question}
                </span>
              </AccordionSummary>

              <AccordionDetails>

                <p className="text-gray-500 leading-8">
                  {faq.answer}
                </p>

              </AccordionDetails>

            </Accordion>

          ))}

        </div>

      )}

    </div>
  );
};

export default ProductFaqTab;