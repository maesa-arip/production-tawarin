<?php

namespace App\Notifications\Reservation;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class ReservationAcceptComplaintNotification extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    
    protected $reservation,$user;
    public function __construct($reservation,$user)
    {

        $this->reservation = $reservation ;
        $this->user = $user ;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
                    ->line('Komplainmu atas barber '. $this->user->name . ' pada '. $this->reservation->companyName . ' Untuk Layanan '.$this->reservation->counterName.  ' Tanggal '.$this->reservation->date. ' Jam '.$this->reservation->time. ' dengan alasan '.$this->reservation->complaint_reason. ' Sudah diterima, Kompensasi sudah masuk, silakan cek menu saldo' )
                    ->action('Lihat', url(route('wallets.index')))
                    ->line('Thank you for using our application!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
