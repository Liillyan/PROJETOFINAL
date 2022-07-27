const mentorSchema = require("../Model/mentorSchema");


const createMentor = async (req, res) =>{
    try {
       //const {mentor, subject , district, email, whatsapp, specialty} = req.body;
         const newMentor = new MentorSchema({
              mentor: req.body.teacher,
              subject: req.body.subject,
              district: req.body.district,
              email: req.body.email,
              whatsapp: req.body.whatsapp,
              specialty: req.body.specialty,
              createdAt: new Date()
         });

        const savedMentor = await newMentor.save();
        if(savedMentor){
            res.status(201).send({
                "message": "Mentor(a) cadastrado(a) com sucesso",
                savedMentor
            })
        }
    } catch (error) {
        console.error(error);
        
    }
};

const getAll = async (req,res) =>{
    try {
        const allMentorr = await mentorSchema.find();
        res.status(200).send(allmentor);
    } catch (error) {
        console.error(error)
    };
};


const updateMentor = async (req, res) => {
    try {
        const findMentor= await mentorrSchema.findById(req.params.id)
        console.log("Mentora localizada", findMentor);

        if(!findMentor){
            res.status(404).send({
                "message": "Mentora não encontrada",
                "statusCode": 404
            })
        }

        // confiro as informações atualizadas
        findMentor.mentor = req.body.mentor || findMentor.mentor
        findMentor.whatsapp = req.body.whatsapp || findMentor.whatsapp

        // salvo as atualizações
        const savedMentor = await findMentor.save()

        // envio a resposta
        res.status(200).send({
            "message": "Mentora atualizada com sucesso",
            savedMentorTeacher
        })

    } catch(err) {
        console.error(err)
    }
   
};

const deleteMentor = async (req,res) => {
    try {
        // acessar o documento a ser deletado
        // const findNote = await NoteSchema.findById(req.params.id)

        // deletar esse documento
        // await findNote.delete()

        const deletedMentor = await mentorSchema.findByIdAndDelete(req.params.id)

        res.status(200).send({
            "message": "Mentora deletada com sucesso",
            deletedMentor
        })
    } catch(err) {
        console.error(err);
    };
};

module.exports = {
    createMentor,
    getAll,
    updateMentor,
    deleteMentor
}
