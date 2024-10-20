import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Generalquestions = () => {
  return (
    <div className="w-full mx-auto max-w-2xl mb-16">
      <h1 className="text-center mb-10 text-4xl font-semibold">
        Pertanyaan Umum
      </h1>
      <Accordion
        type="single"
        collapsible
        className="border-2 rounded-md px-5 pt-2 pb-3"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg">
            Apa itu Sertifikat Jagoanomparkir?
          </AccordionTrigger>
          <AccordionContent>
            Sertifikat Jagonomparkir adalah sebuah aplikasi pembuat sertifikat
            otomatis secara online
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg">
            Bagaimana cara menggunakan Sertifikat Jagoanomparkir?
          </AccordionTrigger>
          <AccordionContent>
            Cukup mudah, masukan nama anda, <br/>
            dan otomatis akan terbuat
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-none">
          <AccordionTrigger className="text-lg">
            Apakah nanti ada update fitur terbaru?
          </AccordionTrigger>
          <AccordionContent>
            Sudah pasti ada! karena
            Aplikasi masih dalam tahap pengembangan, <br/>
            silahkan kunjungi lagi nanti.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Generalquestions;
