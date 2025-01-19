import { describe, it, expect, vi, beforeEach, test, Mocked } from "vitest"
import { TutorService } from "../../service/tutorServiceImpl";
import { MongoTutorRepository } from "../../repository/mongo/mongoTutorRepository";
import type{ ITutor } from '../../model/tutor'
import { TutorNotFound } from "../../error/tutor.exceptions";

vi.mock("../../../src/repository/mongo/mongoTutorRepository");

describe("TutorService", () => {
    let service : TutorService;
    //@ts-expect-error
    let mockedRepository : vi.Mocked<MongoTutorRepository>;

    const mockedTutor : ITutor = {
        id : "67884d5eb3420aef8ed65831",
        firstName : "test",
        lastName : "testLast",
        email : "test@email.com",
        contactNumber : "3294209834",
        routines : []
    };
    
    beforeEach(() => {
        mockedRepository = vi.mocked(new MongoTutorRepository(), true);

        service = new TutorService(mockedRepository);
      });

    it("should return tutor list" , async () =>{
        mockedRepository.getAll.mockResolvedValue([mockedTutor]);
        const result = await service.getTutors();
        
    
        expect(mockedRepository.getAll).toHaveBeenCalledTimes(1);
        expect(result).toEqual([mockedTutor]);
        
    });

    
    it("should return tutor by id", async () =>{
        mockedRepository.findById.mockResolvedValue(mockedTutor);
        const result = await service.getTutorById(mockedTutor.id);
        
    
        expect(mockedRepository.findById).toHaveBeenCalledTimes(1);
        expect(result).toEqual(mockedTutor);
       
    });

    it("should create new tutor", async () =>{
        mockedRepository.save.mockResolvedValue(mockedTutor);
        const result = await service.saveTutor(mockedTutor);
    
        expect(mockedRepository.save).toHaveBeenCalledTimes(1);
        expect(result).toEqual(mockedTutor);
       
    });

    it("should update tutor", async () =>{
        mockedRepository.findById.mockResolvedValue(mockedTutor);
        mockedRepository.update.mockResolvedValue(mockedTutor);
        const result = await service.updateTutor(mockedTutor);
        
        expect(mockedRepository.findById).toHaveBeenCalledTimes(1);
        expect(mockedRepository.update).toHaveBeenCalledTimes(1);
        expect(result).toEqual(mockedTutor);
       
    });

    // it("update tutor should throw tutor not found exception", async () =>{
    //     mockedRepository.findById.mockResolvedValue(null);
    //     // mockedRepository.update.mockResoldValue(mockedTutor);
    //     const result = await service.updateTutor(mockedTutor);
    
    //     await expect(service.updateTutor(mockedTutor)).toThrow(TutorNotFound);

       
    // });

    it("should delete tutor", async () =>{
        mockedRepository.delete.mockResolvedValue(true);
        const result = await service.deleteTutor(mockedTutor.id);
    
        expect(mockedRepository.delete).toHaveBeenCalledTimes(1);
        expect(result).toBeTruthy();
    });
});

