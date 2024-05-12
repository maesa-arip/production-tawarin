<?php

namespace App\Notifications\Reservation;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class ReservationNotification extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    protected $reservation;
    protected $user;
    protected $reservationTeam;
    public function __construct($reservation,$user,$reservationTeam)
    {
        $this->reservation = $reservation ;
        $this->user = $user ;
        $this->reservationTeam = $reservationTeam ;
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
                    ->line('Ada Reservasi Baru dari '. $this->user->name . ' ,Untuk Layanan '.$this->reservationTeam->name.  ' ,Tanggal '.$this->reservation->date. ' ,Jam '.$this->reservation->time )
                    ->action('Lihat', url(route('reservation.mycustomers')))
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
            'type' => 'Info',
            'title' => 'Ada Reservasi',
            'message' => 'Ada reservasi dari '. $this->reservation->name,
            'url' => route('reservation.mycustomers'),
        ];
    }
}
