const router = require('express').Router();
const { response } = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const Booking = require('../models/bookingModel');
const Bus = require('../models/busModel');
const stripe = require("stripe")(process.env.stripe_key);
const { v4: uuidv4 } = require('uuid');


//Book a seat
router.post("/book-seat", authMiddleware, async (req, res) => {
    try {
        const newBooking = new Booking({
            ...req.body,
            user: req.body.userId
        });
        await newBooking.save();
        const bus = await Bus.findById(req.body.bus);
        bus.seatsBooked = [...bus.seatsBooked, ...req.body.seats];
        await bus.save();
        res.status(200).send({
            message: "Booking successful",
            data: newBooking,
            success: true,
        })
    } catch (error) {
        res.status(500).send({
            message: "Booking failed!",
            data: error,
            success: false,
        });
    }
});

//make mayment
router.post('/make-payment', authMiddleware, async (req, res) => {
    try {
        const { token, amount } = req.body;
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        });
        const payment = await stripe.charges.create({
            amount: amount,
            currency: "USD",
            customer: customer.id,
            receipt_email: token.email,
        }, {
            idempotencyKey: uuidv4()
        })
        if (payment) {
            res.status(200).send({
                message: "Payment successful!",
                data: {
                    transactionId: payment.source.id,
                },
                success: true,
            });
        } else {
            res.status(500).send({
                message: "Payment failed!",
                data: error,
                success: false,
            });
        }
    } catch (error) {
        console.log("Error :"+error);
        res.status(500).send({
            message:"Payment failed",
            data:error,
            success:false,
        });
    }
})
module.exports = router;